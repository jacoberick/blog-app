import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import fire, { db, storage } from '../../../config/fire-conf';
import { v4 as uuidv4 } from 'uuid';

const CreateArt = () => {
  const [art, setArt] = useState({
    title: '',
    artist: '',
    date: '',
    medium: '',
    dimensions: '',
    artPhoto: null,
    unixEpoch: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setArt({ ...art, unixEpoch: Date.now() });
    let newArt = { ...art };

    if (art.artPhoto) {
      await storage
        .ref(`/art-photos/${art.artPhoto.name}`)
        .put(art.artPhoto)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((artPhoto) => {
            newArt = { ...newArt, artPhoto };
          });
        });
    }

    db.collection('art')
      .doc(uuidv4())
      .set(newArt)
      .then(() => {
        alert('Art saved!');
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.');
        console.log(error);
      });
  };

  return (
    <section className="flex items-center flex-col p-2">
      <h2 className="font-header text-3xl mb-6">New Art</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="writtenArtInfo" className="flex justify-center ">
          <div className="mb-6">
            TITLE
            <input
              className="border mx-4 rounded"
              type="text"
              name="title"
              onChange={(e) => setArt({ ...art, title: e.target.value })}
            />
          </div>
          <div>
            ARTIST
            <input
              className="border ml-4 mr-4 rounded"
              type="text"
              name="intro"
              onChange={(e) => setArt({ ...art, artist: e.target.value })}
            />
          </div>
          <div>
            DATE
            <input
              className="border mx-4 rounded"
              type="text"
              name="author"
              onChange={(e) => setArt({ ...art, date: e.target.value })}
            />
          </div>
          <div>
            MEDIUM
            <input
              className="border mx-4 rounded"
              type="text"
              name="date"
              onChange={(e) => setArt({ ...art, medium: e.target.value })}
            />
          </div>
          <div>
            DIMENSIONS
            <input
              className="border rounded ml-4"
              type="text"
              name="date"
              onChange={(e) => setArt({ ...art, dimensions: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-center">
          ART PHOTO
          <input
            type="file"
            name="thumbnail"
            onChange={(e) => setArt({ ...art, artPhoto: e.target.files[0] })}
            className="mb-6 ml-4"
          />
        </div>
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

export default CreateArt;
