import React, { useState } from "react";
import fire from "../config/fire-conf.js";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection("articles")
      .add({ title: title, content: content });
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            className="border-2"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            className="border-2"
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreatePost;
