import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import fire, { db, storage } from "../../../config/fire-conf";
import { v4 as uuidv4 } from "uuid";
import { DragFeature } from "framer-motion";

const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    intro: "",
    author: "",
    date: "",
    thumbnail: null,
    content: "",
    unixEpoch: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setArticle({ ...article, unixEpoch: Date.now() });
    let newArticle = { ...article };

    if (article.thumbnail) {
      await storage
        .ref(`/article-thumbnails/${article.thumbnail.name}`)
        .put(article.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((thumbnail) => {
            newArticle = { ...newArticle, thumbnail };
          });
        });
    }

    db.collection("articles")
      .doc(uuidv4())
      .set(newArticle)
      .then(() => {
        alert("Article saved!");
      })
      .catch((error) => {
        alert("Sorry, there was an error! Check the console.");
        console.log(error);
      });
  };

  return (
    <section className="flex items-center flex-col p-2">
      <h2 className="font-header text-3xl mb-6">New Article</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="titleAndIntro" className="flex justify-center">
          <div className="mb-6">
            TITLE
            <input
              className="border ml-4 mr-4 rounded"
              type="text"
              name="title"
              onChange={(e) => setArticle({ ...article, title: e.target.value })}
            />
          </div>
          <div>
            INTRO
            <input
              className="border ml-4 mr-4 rounded"
              type="text"
              name="intro"
              onChange={(e) => setArticle({ ...article, intro: e.target.value })}
            />
          </div>
          <div>
            AUTHOR
            <input
              className="border ml-4 mr-4 rounded"
              type="text"
              name="author"
              onChange={(e) => setArticle({ ...article, author: e.target.value })}
            />
          </div>
          <div>
            DATE
            <input
              className="border ml-4 rounded"
              type="text"
              name="date"
              onChange={(e) => setArticle({ ...article, date: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-center">
          THUMBNAIL
          <input
            type="file"
            name="thumbnail"
            onChange={(e) => setArticle({ ...article, thumbnail: e.target.files[0] })}
            className="mb-6 ml-4"
          />
        </div>
        <Editor
          initialValue="<p></p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={(content) => setArticle({ ...article, content })}
        />
        <div className="flex justify-center my-4">
          <button
            className="border-2 border-main rounded px-4 py-2 hover:bg-main hover:text-white transition"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateArticle;
