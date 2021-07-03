import { useState, useEffect } from 'react';
import fire from '../../config/fire-conf';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';

const Recommended = () => {
  const [recBooks, setRecBooks] = useState([]);

  //get and store recommended books
  useEffect(() => {
    fire
      .firestore()
      .collection('recommended-books')
      .onSnapshot((snap) => {
        const bookList = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecBooks(bookList);
      });
  }, []);

  return (
    <div id="recommendedDiv" className="bg-background h-screen">
      <Head>
        <title>Gulag Anthem | Recommended Books</title>
      </Head>
      <Header />
      <div id="recommendedInner">
        <h1 className="font-header text-5xl text-center mt-10 mb-10 text-main">
          RECOMMENDED BOOKS
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1 } },
          }}
          id="books"
          className={`flex justify-center mx-auto flex-wrap max-w-4xl mb-28`}
        >
          {recBooks.map((b) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              key={b.id}
              id="bookContainer"
              className={`border-4 border-main m-6 h-60 w-40 flex justify-center items-center rounded-md cursor-pointer`}
            >
              <Link href={'/books/recommended/' + b.id}>
                <img
                  src={b.cover}
                  alt={`${b.title} Book Cover`}
                  className={`w-28 rounded-md`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Recommended;
