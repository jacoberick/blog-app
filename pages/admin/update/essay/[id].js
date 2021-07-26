import EssayShell from '../../EssayShell'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../Store'
import Header from '../../../../components/header'
import { db, storage } from '../../../../config/fire-conf'
import dayjs from 'dayjs'

const UpdateEssay = () => {
  const router = useRouter()
  const { id } = router.query
  const { essays } = useContext(Context)
  const [updatedEssay, setUpdatedEssay] = useState(null)
  const [oldThumbnailRef, setOldThumbnailRef] = useState('')

  useEffect(() => {
    //finds article based on query id and sets it to essay variable
    if (essays.length) {
      let essay = essays.find((a) => id === a.id)
      setUpdatedEssay(essay)
      //extracts thumbnail name from firestore
      let thumbnailName = essay.thumbnail.split('%2F')[1].split('?')[0]
      setOldThumbnailRef(thumbnailName)
    }
  }, [essays])

  const handleUpdateSubmit = async (data, e) => {
    e.preventDefault()
    //sets updatedInfo to updated values from EssayShell, adds updatedAt field equal to date on submit
    let updatedInfo = { ...updatedEssay, updatedAt: dayjs().format() }
    //if there is a thumbnail and it is a instanceof file
    if (updatedEssay.thumbnail && updatedEssay.thumbnail instanceof File) {
      //deletes old thumbnail
      storage.ref(`essay-thumbnails/${oldThumbnailRef}`).delete()
      //post new thumbnail to firestore
      await storage
        .ref(`/essay-thumbnails/${updatedEssay.thumbnail.name}`)
        .put(updatedEssay.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((thumbnail) => {
            updatedInfo = { ...updatedInfo, thumbnail }
          })
        })
    }

    //updates essay in Firestore
    db.collection('essays')
      .doc(updatedEssay.id)
      .set(updatedInfo)
      .then(() => {
        alert('Essay saved!')
        router.push(
          `/essays/${updatedEssay.title.toLowerCase().replaceAll(' ', '-')}`
        )
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.')
        console.log(error)
      })
  }

  return (
    <div>
      <Header />
      <EssayShell
        setEssay={setUpdatedEssay}
        essay={updatedEssay}
        operation="Update"
        onSubmit={handleUpdateSubmit}
      />
    </div>
  )
}

export default UpdateEssay
