import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import fire, { db, storage } from '../../../config/fire-conf';
import { v4 as uuidv4 } from 'uuid';

const CreateBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    authorDesc: '',
    bookDesc: '',
    bookPhoto: null,
    authorPhoto: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newBook = { ...book };

    if (book.bookPhoto) {
      await storage
        .ref(`/recommended-book-covers/${book.bookPhoto.name}`)
        .put(book.bookPhoto)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((bookPhoto) => {
            newBook = { ...newBook, bookPhoto };
          });
        });
    }

    db.collection('recommended-books')
      .doc(uuidv4())
      .set(newBook)
      .then(() => {
        alert('Book saved!');
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.');
        console.log(error);
      });
  };

  return (
    <section className="flex items-center flex-col p-2">
      <h2 className="font-header text-3xl mb-6">New recommended book.</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="top" className="flex justify-center">
          <div className="">
            Title:
            <input
              className="border ml-4 mr-4 rounded"
              type="text"
              name="title"
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>
          <div>
            Author:
            <input
              className="border ml-4 mr-4 rounded"
              type="text"
              name="author"
              onChange={(e) => setBook({ ...book, intro: e.target.value })}
            />
          </div>
          <div>
            Book Photo:
            <input
              className="ml-4 mr-4 rounded"
              type="file"
              name="bookPhoto"
              onChange={(e) =>
                setBook({ ...book, thumbnail: e.target.files[0] })
              }
            />
          </div>
        </div>
        Author Description:
        <Editor
          initialValue="<p></p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={(authorDesc) => setBook({ ...book, content })}
        />
        Book Description
        <Editor
          initialValue="<p></p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={(bookDesc) => setBook({ ...book, content })}
        />
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </section>
  );
};

export default CreateBook;
