import ArticleShell from '../../ArticleShell';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Store';
import Header from '../../../../components/header';
import { db, storage } from '../../../../config/fire-conf';
import dayjs from 'dayjs';

const UpdateArticle = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles } = useContext(Context);
  const [updatedArticle, setUpdatedArticle] = useState(null);

  useEffect(() => {
    if (!!articles.length) {
      let article = articles.find((a) => id === a.id);
      setUpdatedArticle(article);
    }
  }, [articles]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    let updatedInfo = { ...updatedArticle, updatedAt: dayjs().format() };
    if (updatedArticle.thumbnail && updatedArticle.thumbnail instanceof File) {
      await storage
        .ref(`/article-thumbnails/${updatedArticle.thumbnail.name}`)
        .put(updatedArticle.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((thumbnail) => {
            updatedInfo = { ...updatedInfo, thumbnail };
          });
        });
    }

    db.collection('articles')
      .doc(updatedArticle.id)
      .set(updatedInfo)
      .then(() => {
        alert('Article saved!');
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.');
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <ArticleShell
        setArticle={setUpdatedArticle}
        article={updatedArticle}
        operation="Update"
        handleSubmit={handleUpdateSubmit}
      />
    </div>
  );
};

export default UpdateArticle;
