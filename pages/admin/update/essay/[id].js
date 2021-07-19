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
  const [thumbnailRef, setThumbnailRef] = useState('')

  useEffect(() => {
    if (essays.length) {
      let essay = essays.find((a) => id === a.id)
      setUpdatedEssay(essay)
      let thumbnailName = essay.thumbnail.split('%2F')[1].split('?')[0]
      setThumbnailRef(thumbnailName)
    }
  }, [essays])

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    let updatedInfo = { ...updatedEssay, updatedAt: dayjs().format() }
    if (updatedEssay.thumbnail && updatedEssay.thumbnail instanceof File) {
      storage.ref(`essay-thumbnails/${thumbnailRef}`).delete()
      await storage
        .ref(`/essay-thumbnails/${updatedEssay.thumbnail.name}`)
        .put(updatedEssay.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((thumbnail) => {
            updatedInfo = { ...updatedInfo, thumbnail }
          })
        })
    }

    db.collection('essays')
      .doc(updatedEssay.id)
      .set(updatedInfo)
      .then(() => {
        alert('Essay saved!')
        router.push(`/essays/${id}`)
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
        handleSubmit={handleUpdateSubmit}
      />
    </div>
  )
}

export default UpdateEssay
