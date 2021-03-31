import React, {useState, useEffect} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import fire, { db, storage } from '../../../config/fire-conf';
import { v4 as uuidv4 } from 'uuid';

const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: '',
    intro: '',
    thumbnail: null,
    content: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newArticle = {...article}

    if (article.thumbnail) {
      await storage
        .ref(`/article-thumbnails/${article.thumbnail.name}`)
        .put(article.thumbnail)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then(thumbnail => {
            newArticle = {...newArticle, thumbnail}
          })
        })
    }

    db
      .collection('articles')
      .doc(uuidv4())
      .set(newArticle)
      .then(() => {
        alert('Article saved!')
      })
      .catch((error) => {
        alert('Sorry, there was an error! Check the console.');
        console.log(error);
      });
  }

  return (
    <section>
      <h2>New article.</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input type="text" name="title" onChange={(e) => setArticle({...article, title: e.target.value})}/>
        </div>
        <div>
          <input type="text" name="intro" onChange={(e) => setArticle({...article, intro: e.target.value})}/>
        </div>
        <div>
          <input type="file" name="thumbnail" onChange={(e) => setArticle({...article, thumbnail: e.target.files[0]})}/>
        </div>
        <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={(content) => setArticle({...article, content})}
        />
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </section>
  )
}

export default CreateArticle