import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { useState, useEffect } from 'react'

//Mail Chimp input component
const CustomForm = ({ status, message, onValidated }) => {
  const hoverHighlight = 'hover:text-highlight transition duration-200'
  const [email, setEmail] = useState('')
  const [importStatus, setImportStatus] = useState(status)

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      })
    setEmail('')
    setTimeout(() => {
      setImportStatus(null)
    }, 5000)
  }

  useEffect(() => {
    setImportStatus(status)
  }, [status])

  return (
    <div>
      <form
        className="flex flex-col m775:items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="max-w-xs mb-4 m775:text-center">
          {importStatus === 'sending' && <div>sending...</div>}
          {importStatus === 'error' && (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {importStatus === 'success' && (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
        </div>
        <div>
          <input
            className="text-text mr-4 outline-none rounded focus:ring focus:ring-battleship h-8"
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={`focus:outline-none`}>
            <p
              className={`hover:border-highlight ${hoverHighlight} transition duration-200 border-2 p-1 m-0 rounded h-8 flex items-center`}
            >
              Subscribe
            </p>
          </button>
        </div>
      </form>
    </div>
  )
}

//Mail Chimp parent container
const MailChimpForm = () => {
  const postUrl = `https://gulaganthem.us7.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default MailChimpForm
