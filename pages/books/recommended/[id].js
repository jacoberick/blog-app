import fire from '../../../config/fire-conf'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

const Book = ({
  title,
  author,
  mugshot,
  authorDescription,
  bookDescription,
  cover,
}) => {
  const photoCSS =
    'w-1/3 flex justify-center rounded-md p-4 items-start mx-14 m1200:w-1/2'

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-4">
        <Head>
          <title>{`Gulag Anthem | ${title}`}</title>
        </Head>
        <Link href="/books/recommended">
          <p className="hover:underline m-0 cursor-pointer m775:mb-4">Back</p>
        </Link>
        <div id="bookDetailInner" className="pb-10 text-main">
          <div id="topSection" className="flex items-center flex-col">
            <h1 className="font-bookTitle text-9xl uppercase text-center m775:text-7xl m400:text-5xl">
              {title}
            </h1>
            <h2 className="mt-12 m400:mt-6 mb-16 text-center text-4xl italic m1200:mb-8 m400:text-2xl m400:mb-0">
              {author}
            </h2>
          </div>
          <div
            id="bottomSection"
            className="mx-4 flex justify-around text-text m1200:flex-col m1200:items-center"
          >
            <div id="mugshot" className={photoCSS}>
              <img
                className="w-60 rounded-md m1200:mb-6"
                src={mugshot}
                alt=""
              />
            </div>
            <div
              id="bookAuthorInfo"
              className="w-1/3 text-lg rounded-md leading-relaxed flex flex-col justify-center m1200:min-w-full"
            >
              <p className="mb-6">{authorDescription}</p>
              <p>{bookDescription}</p>
            </div>
            <div id="cover" className={photoCSS}>
              <img className="rounded-md w-60" src={cover} alt="" />
            </div>
          </div>
          <p className="m-0 text-xs">
            Book and Author information provided via Wikipedia
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

//communicates with Firestore to grab recommended book details based on query, which holds the book entry id
export const getServerSideProps = async ({ query }) => {
  let content = {}
  await fire
    .firestore()
    .collection('recommended-books')
    .doc(query.id)
    .get()
    .then((result) => {
      content = result.data()
    })

  return {
    props: {
      title: content.title,
      author: content.author,
      authorDescription: content.authorDescription,
      bookDescription: content.bookDescription,
      cover: content.cover,
      mugshot: content.mugshot,
    },
  }
}
export default Book
