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
      <div id="recommendedDiv">
        {recBooks.map((b) => (
          <div id="bookContainer">
            <p>{b.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
