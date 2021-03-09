import fire from "../../config/fire-conf";
import Link from "next/link";

const Article = ({ title, content, thumbnail, intro }) => {
  return (
    <div className="mx-52 p-4 text-main">
      <Link href="/">
        <a>Back</a>
      </Link>
      <h2 className="text-center font-header text-5xl">{title}</h2>
      <p className="text-center mt-4 text-xl italic">{intro}</p>
      <img src={thumbnail} className="mx-auto my-8" />
      {content}
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  let content = {};

  await fire
    .firestore()
    .collection("articles")
    .doc(query.id)
    .get()
    .then((result) => {
      content = result.data();
    });

  return {
    props: {
      title: content.title,
      intro: content.intro,
      content: content.content,
      thumbnail: content.thumbnail,
    },
  };
};
export default Article;
