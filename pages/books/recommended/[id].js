import fire from "../../../config/fire-conf";
import Link from "next/link";

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const content = {};
  await fire
    .firestore()
    .collection("recommended-books")
    .doc(query.id)
    .get()
    .then((result) => {
      content["title"] = result.data().title;
    });

  return {
    props: {
      title: content.title,
    },
  };
};
export default Article;
