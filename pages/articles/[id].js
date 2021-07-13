import fire from '../../config/fire-conf';
import Header from '../../components/header';

const Article = ({ title, content, thumbnail, intro, author, date }) => {
  return (
    <div className="text-main">
      <Header />
      <div id="container" className="flex justify-center flex-col items-center">
        <div
          id="top"
          className="flex items-center w-full justify-center border-b-2 border-main h-screenMinusHeader m775:flex-col m775:justify-start"
        >
          <div
            id="left"
            className="w-1/2 h-full overflow-hidden m775:w-full m775:h-1/2"
          >
            <img src={thumbnail} className="object-cover h-full w-full" />
          </div>
          <div
            id="right"
            className="w-1/2 m775:h-1/2 m775:flex m775:flex-col m775:justify-center m775:w-full"
          >
            <h2 className="text-center font-header text-5xl mb-4">{title}</h2>
            <h3 className="text-center text-xl italic">{intro}</h3>
          </div>
        </div>
        <div className="max-w-60rem mx-20 m475:mx-10">
          <div id="info" className="w-full mt-12 m775:text-sm">
            <p className="font-bold m-0">By {author}</p>
            <p>Published {date}</p>
          </div>
          <div
            className="text-xl m775:text-lg m550:text-base"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  let content = {};

  await fire
    .firestore()
    .collection('articles')
    .doc(query.id)
    .get()
    .then((result) => {
      content = result.data();
    });

  return {
    props: {
      title: content.title,
      intro: content.intro,
      author: content.author,
      date: content.date,
      thumbnail: content.thumbnail,
      content: content.content,
    },
  };
};
export default Article;
