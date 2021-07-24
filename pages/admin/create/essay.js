import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { db, storage } from '../../../config/fire-conf'
import { v4 as uuidv4 } from 'uuid'
import EssayShell from '../EssayShell'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

const CreateEssay = () => {
  const router = useRouter()
  const [essay, setEssay] = useState({
    title: '',
    intro: '',
    author: '',
    thumbnail: null,
    content: '',
  })

  const handleCreateSubmit = async (data, e) => {
    e.preventDefault()
    let newEssay = { ...essay, createdAt: dayjs().format() }

    if (essay.thumbnail) {
      await storage
        .ref(`/essay-thumbnails/${essay.thumbnail.name}`)
        .put(essay.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((thumbnail) => {
            newEssay = { ...newEssay, thumbnail }
          })
        })
    }

    db.collection('essays')
      .doc(uuidv4())
      .set(newEssay)
      .then(() => {
        alert('Essay saved!')
        router.push(`/essays/`)
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.')
        console.log(error)
      })
  }

  return (
    <EssayShell
      operation="Create"
      essay={essay}
      setEssay={setEssay}
      onSubmit={handleCreateSubmit}
    />
  )
}

export default CreateEssay
