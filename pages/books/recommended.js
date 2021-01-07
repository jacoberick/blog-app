import { useState, useEffect } from "react";
import fire from "../../config/fire-conf";

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
    <div id="recommendedDiv">
      <div id="recommendedInner" className={`flex justify-center p-6`}>
        {recBooks.map((b) => (
          <div key={b.id} id="bookContainer" className={`ml-10`}>
            <img src={b.cover} alt={`${b.title} Book Cover`} className={`w-28`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
