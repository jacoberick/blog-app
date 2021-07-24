import React, { useState } from 'react'
import CreateEssay from './create/essay'
import CreateBook from './create/book'
import CreateArt from './create/art'
import Header from '../../components/header.js'

const Create = (props) => {
  const [contentType] = useState(props.query.type)

  return (
    <div>
      <Header />
      <main>
        {/* Conditionally render component based on contentType pulled from query */}
        {contentType === 'essay' && <CreateEssay />}
        {contentType === 'recommended-book' && <CreateBook />}
        {contentType === 'art' && <CreateArt />}
        {/* add other content type components */}
      </main>
    </div>
  )
}

Create.getInitialProps = ({ query }) => {
  return { query }
}
export default Create
