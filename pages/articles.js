import Header from "../components/header";
import Footer from "../components/footer";
import { useContext } from "react";
import fire, { db } from "../config/fire-conf";
import { motion } from "framer-motion";
import Link from "next/link";
import { Context } from "../pages/Store";

const Articles = () => {
  const { articles } = useContext(Context);

  return (
    <div>
      <Header />
      <div id="articlesMaster" className="h-home flex mt-4 flex-col items-center">
        <h1 className="font-header text-5xl mt-10 mb-10 text-main">All Articles</h1>
        <div id="articlesContainer" className="flex flex-wrap justify-center">
          {articles &&
            articles.map((a, idx) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                id="articleContainer"
                className="cursor-pointer mb-10"
                key={idx}
              >
                <Link href={`articles/${a.id}`}>
                  <div className="flex items-center">
                    <img
                      src={a.thumbnail}
                      alt=""
                      className="border-2 border-main rounded-sm w-44 h-24 object-top object-cover"
                    ></img>
                    <p className="ml-10 mb-0  text-base font-semibold w-72">
                      {a.title}: {a.intro}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
