import { useContext } from 'react';
import { Context } from '../../pages/Store';
import Link from 'next/link';
import { motion } from 'framer-motion';

const homepageArticles = () => {
  const { articles, featured } = useContext(Context);

  const rectangle = (
    <div
      id="rectangle"
      className="mb-1 h-3 w-3 bg-main rounded-sm relative"
    ></div>
  );

  return (
    <div id="articlesContainer" className="flex m850:block">
      <div id="articlesContainerInner"></div>
      {/* FEATURED SECTION */}
      <div id="featuredContainer" className="">
        {featured && (
          <div
            id="featuredInner"
            className="flex items-center flex-col mx-10 m850:mx-0"
          >
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
                  className="cursor-pointer w-80 rounded-sm border-2 border-main min-h-25remf m300:w-60"
                ></motion.img>
              </Link>
            </div>
            <div id="bottom" className="mt-2">
              <div id="info" className="mb-2 font-semibold">
                <p className="m-0 text-base text-center">
                  {featured.title}: {featured.intro}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RECENT ARTICLES SECTION */}
      <div
        id="RecentArticles"
        className="flex flex-col justify-between mx-24 m850:mx-0 m999:mx-11 m850:mt-10 "
      >
        <div
          id="readRecentArticles"
          className="flex items-center border-b-2 border-main m999:justify-center m850:justify-start  m850:mb-2 "
        >
          {rectangle}
          <h2 className="ml-2">
            <span className="text-red-600">READ </span>RECENT ARTICLES
          </h2>
        </div>
        <div
          id="articlesContainer"
          className="flex flex-col m850:flex-row m850:flex-wrap m850:justify-center"
        >
          {articles &&
            articles.slice(0, 3).map((a, idx) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                id="articleContainer"
                className="cursor-pointer my-4"
                key={idx}
              >
                <Link href={`articles/${a.id}`}>
                  <div className="flex items-center m999:flex-col my-4 m999:my-0">
                    <img
                      src={a.thumbnail}
                      alt=""
                      className="border-2 border-main rounded-sm w-44 h-24 object-top object-cover min-w-5rem m999:h-18 m999:w-32 m999:mb-2"
                    ></img>
                    <p className="ml-10 mb-0 text-base font-semibold w-72 m999:text-sm m999:text-center m999:ml-0 m300:max-w-15rem">
                      {a.title}: {a.intro}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>

        <div
          id="buttonContainer"
          className="flex justify-end m999:justify-center m999:mt-2 m850:justify-end m300:justify-center"
        >
          <button className="border-2 border-main p-2 rounded hover:text-white hover:bg-main transition duration-150 focus:outline-none">
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
