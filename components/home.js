import { useState, useEffect } from "react";
import fire from "../config/fire-conf";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = ({ title }) => {
  const [articles, setArticles] = useState([]);

  //get and store articles
  useEffect(() => {
    fire
      .firestore()
      .collection("articles")
      .onSnapshot((snap) => {
        const artList = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(artList);
      });
  }, []);

  return (
    <div id="home" className="h-4/5 bg-background">
      <div id="articlesMap" className="flex justify-center flex-wrap max-w-4xl mx-auto">
        {articles.map((a) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="articleContainer"
            className="w-56 m-6 cursor-pointer"
          >
            <Link href={"articles/" + a.id}>
              <div className="flex flex-col items-center">
                <img src={a.thumbnail} alt="" className="rounded-md" />
                <p id="articleTitle">{a.title}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
