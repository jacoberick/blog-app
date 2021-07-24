import React, { useEffect, useState } from 'react'
import fire, { db } from '../config/fire-conf'

export const Context = React.createContext()

const Store = ({ children }) => {
  const [essays, setEssays] = useState([])
  const [featured, setFeatured] = useState(null)
  const [art, setArt] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  //Global authentication realtime updates
  useEffect(() => {
    const handleAuth = (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    }
    const auth = fire.auth()
    const unsub = auth.onAuthStateChanged(handleAuth, (err) => {
      console.log(err)
    })
    return () => {
      unsub()
    }
  }, [])

  //Brings in Essays as realtime updates
  useEffect(() => {
    const handleEssayChanges = (snap) => {
      let essayList = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEssays(essayList)
      //select and set featured content
      let grabFeature = essayList.find((e) => e.featured === true) || null
      setFeatured(grabFeature)
    }
    const query = db.collection('essays').orderBy('createdAt', 'desc')
    const unsub = query.onSnapshot(handleEssayChanges, (err) =>
      console.log(err)
    )
    return () => {
      unsub()
    }
  }, [])

  return (
    <Context.Provider value={{ essays, featured, loggedIn }}>
      {children}
    </Context.Provider>
  )
}

export default Store
