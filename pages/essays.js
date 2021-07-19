import Header from '../components/header'
import Footer from '../components/footer/footer'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Context } from './Store'

const Essays = () => {
  const { essays } = useContext(Context)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div id="essayMaster" className="flex mt-4 flex-col items-center mb-3 ">
        <h1 className="font-header text-5xl mt-10 mb-10 text-main border-b-2 border-main m475:text-4xl">
          All Essays
        </h1>
        <div id="essayContainer" className="flex flex-wrap justify-center">
          {essays &&
            essays.map((e, idx) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                id="essayContainer"
                className="cursor-pointer mb-10"
                key={idx}
              >
                <Link href={`essays/${e.id}`}>
                  <div className="flex flex-col items-center flex-wrap mx-8">
                    <img
                      src={e.thumbnail}
                      alt=""
                      className="mb-2 border-2 border-main rounded-sm w-44 h-24 object-top object-cover"
                    ></img>
                    <p className="m-0 text-base font-semibold w-72 text-center">
                      {e.title}: {e.intro}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Essays
