import fire from "../../../config/fire-conf";
import Link from "next/link";

const Article = (props) => {
  const photoCSS = "shadow-nuemorphic w-1/3 flex justify-center rounded-md p-4 items-center mx-14";
  return (
    <div className="p-4">
      <div id="bookDetailInner" className="pb-10">
        <div id="topSection" className="flex items-center flex-col">
          <h1 className="font-bookTitle text-9xl uppercase">{props.title}</h1>
          <h2 className="mt-12 mb-16 text-center text-4xl italic">{props.author}</h2>
        </div>
        <div id="bottomSection" className="mx-4 flex justify-around">
          <div id="mugshot" className={photoCSS}>
            <img className="w-60 rounded-md" src={props.mugshot} alt="" />
          </div>
          <div id="bookAuthorInfo" className="w-1/3 text-lg shadow-nuemorphic rounded-md p-8 leading-relaxed">
            <p className="mb-6">{props.authorDescription}</p>
            <p>{props.bookDescription}</p>
          </div>
          <div id="cover" className={photoCSS}>
            <img className="rounded-md w-60" src={props.cover} alt="" />
          </div>
        </div>
      </div>
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
      content["author"] = result.data().author;
      content["authorDescription"] = result.data().authorDescription;
      content["bookDescription"] = result.data().bookDescription;
      content["cover"] = result.data().cover;
      content["mugshot"] = result.data().mugshot;
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
export default Article;
