import { useState, useEffect } from "react";
import Head from "next/head";
import fire from "../config/fire-conf";
import CreatePost from "../components/CreatePost";
import Link from "next/link";

const Home = () => {
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

  return (
    <div>
      <Head>
        <title>Gulag Anthem</title>
      </Head>
      <h1>Gulag Anthem</h1>
      {notification}
      {!loggedIn ? (
        <div>
          <Link href="/users/register">
            <a>Register</a>
          </Link>{" "}
          |
          <Link href="/users/login">
            <a> Login</a>
          </Link>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link href="/articles/[id]" as={"/articles/" + a.id}>
              <a>{a.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {loggedIn && <CreatePost />}
    </div>
  );
};

export default Home;
