import React, { useEffect, useState } from 'react'
import fire, { db } from '../config/fire-conf'

export const Context = React.createContext()

const Store = ({ children }) => {
  const [essays, setEssays] = useState([])
  const [featured, setFeatured] = useState(null)
  const [art, setArt] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  //User log in/out
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  })

  useEffect(() => {
    db.collection('essays')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let essayList = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setEssays(essayList)
        //select and set featured content
        let grabFeature = essayList.find((e) => e.featured === true) || null
        setFeatured(grabFeature)
      })
  }, [])

  return (
    <Context.Provider value={{ essays, featured, loggedIn }}>
      {children}
    </Context.Provider>
  )
}

export default Store
