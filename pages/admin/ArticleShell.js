import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { v4 as uuidv4 } from 'uuid';

const ArticleShell = ({ operation, article, setArticle, handleSubmit }) => {
  let [initialValue, setInitialValue] = useState(undefined);
  let [renderMCE, setRenderMCE] = useState(false);
  useEffect(() => {
    //sets initialValue state if article is true
    setInitialValue(article && article.content);
    //Evaluates if tinyMCE should be rendered based off of existence of state or operation type
    setRenderMCE(initialValue ? true : operation === 'Create' ? true : false);
  });
  return (
    <section className="flex items-center flex-col p-2">
      <h2 className="font-header text-3xl mb-6">{`${operation} Article`}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="top" className="flex justify-center">
          <div className="mb-6">
            <label>
              TITLE
              <input
                defaultValue={article && article.title ? article.title : ''}
                className="border ml-4 mr-4 rounded"
                type="text"
                name="title"
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              INTRO{' '}
              <input
                defaultValue={article && article.intro ? article.intro : ''}
                className="border ml-4 mr-4 rounded"
                type="text"
                name="intro"
                onChange={(e) =>
                  setArticle({ ...article, intro: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              AUTHOR
              <input
                value={article && article.author ? article.author : ''}
                className="border ml-4 mr-4 rounded"
                type="text"
                name="author"
                onChange={(e) =>
                  setArticle({ ...article, author: e.target.value })
                }
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <label>
            THUMBNAIL
            <input
              type="file"
              name="thumbnail"
              onChange={(e) =>
                setArticle({ ...article, thumbnail: e.target.files[0] })
              }
              className="mb-6 ml-4"
            />
          </label>
        </div>
        {/* Conditional render based on renderMCE that takes place in useEffect */}
        {renderMCE && (
          <Editor
            apiKey="jyjlabakiev6n1dbiy6dkinwd9479cuocr2e8tyahl3ulrs3"
            initialValue={initialValue}
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
            onEditorChange={(content) => setArticle({ ...article, content })}
          />
        )}

        <div className="flex justify-center my-4">
          <button
            className="border-2 border-main rounded px-4 py-2 hover:bg-main hover:text-white transition"
            type="submit"
          >
            {operation}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ArticleShell;
