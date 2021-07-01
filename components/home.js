import { useState, useEffect } from "react";
import fire, { db } from "../config/fire-conf";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = ({ title }) => {
  const [articles, setArticles] = useState([]);
  const [featured, setFeatured] = useState(null);

  //get, store, and order articles from firebase
  useEffect(() => {
    db.collection("articles")
      .orderBy("unixEpoch")
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
  }, []);

  return (
    <div id="homeContent" className="h-home bg-background flex items-center">
      <div id="featuredContainer" className="ml-10">
        {/* If featured, display content*/}
        {featured && (
          <div id="featuredInner" className="flex items-center flex-col">
            <div id="top" className="">
              <div id="featuredContainer" className="flex items-center">
                <div id="triangle" className="h-3 w-3 bg-main rounded-sm relative"></div>
                <div id="trianglePing" className="h-3 w-3 bg-main rounded-sm animate-ping absolute"></div>
                <p className="m-0 font-featured  pt-1 ml-2">
                  <span className="text-red-600">READ </span>FEATURED
                </p>
              </div>
              <Link href={`articles/${featured.id}`}>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src={featured.thumbnail}
                  className="cursor-pointer w-80 rounded"
                ></motion.img>
              </Link>
            </div>
            <div id="bottom" className="mt-2">
              <div id="info" className="mb-2 font-body font-semibold">
                <p className="m-0 text-xl">
                  {featured.title}: {featured.intro}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
