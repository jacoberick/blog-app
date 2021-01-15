import { useState, useEffect } from "react";
import fire from "../../config/fire-conf";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Recommended = () => {
  const [recBooks, setRecBooks] = useState([]);

  //get and store recommended books
  useEffect(() => {
    fire
      .firestore()
      .collection("recommended-books")
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
        <h1 className="font-header text-5xl text-center mt-10 mb-10">RECOMMENDED BOOKS</h1>
        <div id="books" className={`flex justify-center flex-wrap max-w-4xl mx-auto mb-28`}>
          {recBooks.map((b) => (
            <div
              key={b.id}
              id="bookContainer"
              className={`shadow-neumorphic hover:animate-shadowFade m-6 h-60 w-40 flex justify-center items-center rounded-md cursor-pointer transition-shadow duration-1000`}
            >
              <Link href={"/books/recommended/" + b.id}>
                <img src={b.cover} alt={`${b.title} Book Cover`} className={`w-28 rounded-md`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recommended;
