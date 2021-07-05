import { useContext } from 'react';
import { Context } from '../pages/Store';
import Link from 'next/link';
import { motion } from 'framer-motion';

const homepageArticles = () => {
  const { articles } = useContext(Context);
  const { featured } = useContext(Context);

  const rectangle = (
    <div
      id="rectangle"
      className="mb-1 h-3 w-3 bg-main rounded-sm relative"
    ></div>
  );

  return (
    <div id="articlesContainer" className="flex">
      {/* FEATURED SECTION */}
      <div id="featuredContainer" className="">
        {featured && (
          <div id="featuredInner" className="flex items-center flex-col mx-10">
            <div id="top" className="">
              <div
                id="readFeaturedContainer"
                className="flex items-center mb-2 "
              >
                {rectangle}
                <div
                  id="rectanglePing"
                  className="mb-1 h-3 w-3 bg-main rounded-sm animate-ping absolute"
                ></div>
                <h2 className="ml-2">
                  <span className="text-red-600">READ </span>FEATURED
                </h2>
              </div>
              <Link href={`articles/${featured.id}`}>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src={featured.thumbnail}
                  className="cursor-pointer w-80 rounded-sm border-2 border-main"
                ></motion.img>
              </Link>
            </div>
            <div id="bottom" className="mt-2">
              <div id="info" className="mb-2 font-semibold">
                <p className="m-0 text-base">
                  {featured.title}: {featured.intro}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RECENT ARTICLES SECTION */}
      <div id="RecentArticles" className="flex flex-col justify-between mx-24">
        <div id="readRecentArticles" className="flex items-center">
          {rectangle}
          <h2 className="ml-2">
            <span className="text-red-600">READ </span>RECENT ARTICLES
          </h2>
        </div>
        {articles &&
          articles.slice(0, 3).map((a, idx) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              id="articleContainer"
              className="cursor-pointer"
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
        <div id="buttonContainer" className="flex justify-end">
          <button className="border-2 border-main p-2 rounded hover:text-white hover:bg-main transition duration-150">
            <Link href="/articles">
              <h2 className="text-sm mt-1">VIEW ALL ARTICLES</h2>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default homepageArticles;
