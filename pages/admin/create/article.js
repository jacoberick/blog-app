import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { db, storage } from '../../../config/fire-conf';
import { v4 as uuidv4 } from 'uuid';
import ArticleShell from '../ArticleShell';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

const CreateArticle = () => {
  const router = useRouter();
  const [article, setArticle] = useState({
    title: '',
    intro: '',
    author: '',
    thumbnail: null,
    content: '',
  });

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    let newArticle = { ...article, createdAt: dayjs().format() };

    if (article.thumbnail) {
      await storage
        .ref(`/article-thumbnails/${article.thumbnail.name}`)
        .put(article.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((thumbnail) => {
            newArticle = { ...newArticle, thumbnail };
          });
        });
    }

    db.collection('articles')
      .doc(uuidv4())
      .set(newArticle)
      .then(() => {
        alert('Article saved!');
        router.push('/');
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.');
        console.log(error);
      });
  };

  return (
    <ArticleShell
      operation="Create"
      article={article}
      setArticle={setArticle}
      handleSubmit={handleCreateSubmit}
    />
  );
};

export default CreateArticle;
