import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useForm } from 'react-hook-form'

const EssayShell = ({ operation, essay, setEssay, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()
  const [initialValue, setInitialValue] = useState(undefined)
  const [renderMCE, setRenderMCE] = useState(false)

  let currentThumbnail =
    essay && typeof essay.thumbnail === 'string' && operation === 'Update'
      ? essay.thumbnail.split('%2F')[1].split('?')[0]
      : null
  const inputStyle = 'border ml-4 mr-4 rounded'
  const valFailStyle = 'focus:outline-none border-highlight focus:shadow-form'

  useEffect(() => {
    //sets initialValue state if essay is true
    setInitialValue(essay && essay.content)
    //Evaluates if tinyMCE should be rendered based off of existence of state or operation type
    setRenderMCE(initialValue ? true : operation === 'Create' ? true : false)
  })

  useEffect(() => {
    //sets defaultValues in react-hook-form when essay is available
    if (!!essay) {
      setValue('title', essay.title)
      setValue('intro', essay.intro)
      setValue('author', essay.author)
    }
  }, [essay])

  return (
    <section className="flex items-center flex-col p-2">
      <h2 className="font-header text-3xl mb-6">{`${operation} Essay`}</h2>
      {Object.keys(errors).length != 0 && (
        <div className="mb-4 text-highlight">
          <p className="m-0">*Check required fields*</p>
        </div>
      )}
      <form onSubmit={handleSubmit((data, e) => onSubmit(data, e))}>
        <div id="top" className="flex justify-center">
          <div className="mb-6">
            <label>
              TITLE
              <input
                defaultValue={essay?.title ? essay.title : ''}
                className={`${inputStyle} ${
                  errors.title ? valFailStyle : null
                }`}
                type="text"
                {...register('title', { required: true })}
                onChange={(e) => setEssay({ ...essay, title: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              INTRO
              <input
                name="intro"
                defaultValue={essay?.intro ? essay.intro : ''}
                className={`${inputStyle} ${
                  errors.intro ? valFailStyle : null
                }`}
                type="text"
                {...register('intro', { required: true })}
                onChange={(e) => setEssay({ ...essay, intro: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              AUTHOR
              <input
                defaultValue={essay?.author ? essay.author : ''}
                className={`${inputStyle} ${
                  errors.author ? valFailStyle : null
                }`}
                type="text"
                {...register('author', { required: true })}
                onChange={(e) => setEssay({ ...essay, author: e.target.value })}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <label className={`flex`}>
            <p className={`m-0 ${errors.thumbnail ? 'text-highlight' : null}`}>
              THUMBNAIL
            </p>
            <input
              type="file"
              className="mb-6 ml-4"
              {...register('thumbnail', { required: operation === 'Create' })}
              onChange={(e) => {
                setValue('thumbnail', e.target.files)
                setEssay({ ...essay, thumbnail: e.target.files[0] })
              }}
            />
            {currentThumbnail && (
              <p>{`Current thumbnail: ${currentThumbnail}`}</p>
            )}
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
