import React, { useState, useEffect } from 'react';
import CreateArticle from './create/article';
import CreateBook from './create/book';
import CreateArt from './create/art';
import Header from '../../components/header.js';

const Create = (props) => {
  const [contentType] = useState(props.query.type);

  return (
    <div>
      <Header />
      <main>
        {contentType === 'article' && <CreateArticle />}
        {contentType === 'recommended-book' && <CreateBook />}
        {contentType === 'art' && <CreateArt />}
        {/* add other content type components */}
      </main>
    </div>
  );
};

Create.getInitialProps = ({ query }) => {
  return { query };
};
export default Create;
