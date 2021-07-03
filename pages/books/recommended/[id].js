import fire from '../../../config/fire-conf';
import Head from 'next/head';
import Link from 'next/link';

const Book = ({
  title,
  author,
  mugshot,
  authorDescription,
  bookDescription,
  cover,
}) => {
  const photoCSS =
    'w-1/3 flex justify-center rounded-md p-4 items-center mx-14';

  return (
    <div className="p-4">
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <Link href="/books/recommended">
        <p className="hover:underline m-0 cursor-pointer">Back</p>
      </Link>
      <div id="bookDetailInner" className="pb-10 text-main">
        <div id="topSection" className="flex items-center flex-col">
          <h1 className="font-bookTitle text-9xl uppercase">{title}</h1>
          <h2 className="mt-12 mb-16 text-center text-4xl italic">{author}</h2>
        </div>
        <div id="bottomSection" className="mx-4 flex justify-around text-text">
          <div id="mugshot" className={photoCSS}>
            <img className="w-60 rounded-md" src={mugshot} alt="" />
          </div>
          <div
            id="bookAuthorInfo"
            className="w-1/3 text-lg rounded-md leading-relaxed flex flex-col justify-center"
          >
            <p className="mb-6">{authorDescription}</p>
            <p>{bookDescription}</p>
          </div>
          <div id="cover" className={photoCSS}>
            <img className="rounded-md w-60" src={cover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  let content = {};
  await fire
    .firestore()
    .collection('recommended-books')
    .doc(query.id)
    .get()
    .then((result) => {
      content = result.data();
    });

  return {
    props: {
      title: content.title,
      author: content.author,
      authorDescription: content.authorDescription,
      bookDescription: content.bookDescription,
      cover: content.cover,
      mugshot: content.mugshot,
    },
  };
};
export default Book;
