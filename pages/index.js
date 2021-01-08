import { useState, useEffect } from "react";
import fire from "../config/fire-conf";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Home from "../components/home";
import Footer from "../components/footer";

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
    <div id="indexContainer" className="h-screen">
      <Head>
        <title>Gulag Anthem | Home</title>
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
