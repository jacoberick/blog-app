import React, {useState, useEffect} from 'react'
import CreateArticle from './create/article'

const Create = () => {
  const [contentType, setContentType] = useState('article')

  return (
    <main>
      <h1>Create new content!</h1>
      {contentType === 'article' && <CreateArticle />}
      {/* add other content type components */}
    </main>
  )
}

export default Create