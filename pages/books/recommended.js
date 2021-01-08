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
        const recBooks = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecBooks(recBooks);
        console.log(recBooks);
      });
  }, []);
  return (
    <div id="recommendedDiv" className="bg-background h-screen">
      <Head>
        <title>Gulag Anthem | Recommended Books</title>
        />
      </Head>
      <Header />
      <div id="recommendedInner" className={`flex justify-center flex-wrap max-w-4xl my-3 mx-auto mb-28`}>
        {recBooks.map((b) => (
          <div
            key={b.id}
            id="bookContainer"
            className={`m-6 h-60 w-40 shadow-md flex justify-center items-center rounded-md cursor-pointer shadow-nuemorphic`}
          >
            <Link href={`/`} className="">
              <img src={b.cover} alt={`${b.title} Book Cover`} className={`w-28 rounded-md`} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Recommended;
