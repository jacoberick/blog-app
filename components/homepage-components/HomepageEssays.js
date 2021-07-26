import { useContext } from 'react'
import { Context } from '../../pages/Store'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HomepageEssays = () => {
  const { essays, featured } = useContext(Context)

  const rectangle = (
    <div
      id="rectangle"
      className="mb-1 h-3 w-3 bg-main rounded-sm relative"
    ></div>
  )

  return (
    <div id="essaysContainer" className="flex m850:block">
      <div id="essaysContainerInner"></div>
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
              <Link
                href={`essays/${featured.title
                  .toLowerCase()
                  .replaceAll(' ', '-')}`}
              >
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

      {/* RECENT ESSAYS SECTION */}
      <div
        id="recentEssays"
        className="flex flex-col justify-between mx-24 m850:mx-0 m999:mx-11 m850:mt-10 "
      >
        <div
          id="readRecentEssays"
          className="flex items-center border-b-2 border-main m999:justify-center m850:justify-start  m850:mb-2 "
        >
          {rectangle}
          <h2 className="ml-2">
            <span className="text-red-600">READ </span>RECENT ESSAYS
          </h2>
        </div>
        <div
          id="essaysContainer"
          className="flex flex-col m850:flex-row m850:flex-wrap m850:justify-center"
        >
          {essays &&
            essays.slice(0, 3).map((e, idx) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                id="essayContainer"
                className="cursor-pointer my-4"
                key={idx}
              >
                <Link
                  href={`essays/${e.title
                    .toLowerCase()
                    .replaceAll(' ', '-')}?id=${e.id}`}
                >
                  <div className="flex items-center m999:flex-col my-4 m999:my-0">
                    <img
                      src={e.thumbnail}
                      alt=""
                      className="border-2 border-main rounded-sm w-44 h-24 object-top object-cover min-w-5rem m999:h-18 m999:w-32 m999:mb-2"
                    ></img>
                    <p className="ml-10 mb-0 text-base font-semibold w-72 m999:text-sm m999:text-center m999:ml-0 m300:max-w-15rem">
                      {e.title}: {e.intro}
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
            <Link href="/essays">
              <h2 className="text-sm mt-1">VIEW ALL ESSAYS</h2>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomepageEssays
