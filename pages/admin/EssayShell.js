import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { v4 as uuidv4 } from 'uuid'

const EssayShell = ({ operation, essay, setEssay, handleSubmit }) => {
  let [initialValue, setInitialValue] = useState(undefined)
  let [renderMCE, setRenderMCE] = useState(false)
  useEffect(() => {
    //sets initialValue state if essay is true
    setInitialValue(essay && essay.content)
    //Evaluates if tinyMCE should be rendered based off of existence of state or operation type
    setRenderMCE(initialValue ? true : operation === 'Create' ? true : false)
  })
  return (
    <section className="flex items-center flex-col p-2">
      <h2 className="font-header text-3xl mb-6">{`${operation} Essay`}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="top" className="flex justify-center">
          <div className="mb-6">
            <label>
              TITLE
              <input
                defaultValue={essay && essay.title ? essay.title : ''}
                className="border ml-4 mr-4 rounded"
                type="text"
                name="title"
                onChange={(e) => setEssay({ ...essay, title: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              INTRO
              <input
                defaultValue={essay && essay.intro ? essay.intro : ''}
                className="border ml-4 mr-4 rounded"
                type="text"
                name="intro"
                onChange={(e) => setEssay({ ...essay, intro: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              AUTHOR
              <input
                value={essay && essay.author ? essay.author : ''}
                className="border ml-4 mr-4 rounded"
                type="text"
                name="author"
                onChange={(e) => setEssay({ ...essay, author: e.target.value })}
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
                setEssay({ ...essay, thumbnail: e.target.files[0] })
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
            onEditorChange={(content) => setEssay({ ...essay, content })}
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
  )
}

export default EssayShell
