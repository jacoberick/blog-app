import { useState, useEffect } from "react";
import fire from "../config/fire-conf";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [notification, setNotification] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  //get and store articles
  useEffect(() => {
    fire
      .firestore()
      .collection("articles")
      .onSnapshot((snap) => {
        const articles = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articles);
      });
  }, []);

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification("Logged out");
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
  };

  const hoverHighlight = "hover:text-red transition duration-200";

  return (
    <div className="font-body h-screen">
      <Head>
        <title>Gulag Anthem</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        notification={notification}
        loggedIn={loggedIn}
        articles={articles}
        handleLogout={handleLogout}
        hoverHighlight={hoverHighlight}
      />
      <Home />
      <Footer hoverHighlight={hoverHighlight} />
    </div>
  );
};

export default Index;
