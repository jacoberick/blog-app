import React, { useEffect, useState } from 'react';
import fire, { db } from '../config/fire-conf';

export const Context = React.createContext();

const Store = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [art, setArt] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  //User log in/out
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    db.collection('articles')
      .orderBy('unixEpoch', 'desc')
      .onSnapshot((snap) => {
        let articleList = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articleList);
        //select and set featured content
        let grabFeature = articleList.find((a) => a.featured === true) || null;
        setFeatured(grabFeature);
      });

    db.collection('art')
      .orderBy('unixEpoch')
      .onSnapshot((snap) => {
        let artCollection = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArt(artCollection);
      });
  }, []);

  return (
    <Context.Provider value={{ articles, featured, art, loggedIn }}>
      {children}
    </Context.Provider>
  );
};

export default Store;
