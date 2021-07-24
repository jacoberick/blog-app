import { useState } from 'react'
import fire from '../../config/fire-conf'
import { useRouter } from 'next/router'
import Header from '../../components/header'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notify, setNotification] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const inputStyle = 'border border-2 ml-4 w-40 mb-8 rounded'
  const pStyle = 'm-0'
  const labelStyle = 'flex'

  const handleLogin = (e) => {
    e.preventDefault()
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((res) => {
        setError(false)
        router.push('/')
      })
      .catch((err) => {
        setUsername('')
        setPassword('')
        setError(true)
        setNotification(err.message)
        setTimeout(() => {
          setNotification('')
        }, 2000)
      })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl mb-10">Login</h1>
        {notify}
        <form onSubmit={handleLogin}>
          <label className={labelStyle} htmlFor="username">
            <p className={pStyle}>Username</p>
            <input
              name="username"
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              className={inputStyle}
            />
          </label>

          <br />
          <label className={labelStyle} htmlFor="password">
            <p className={pStyle}>Password</p>
            <input
              name="password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className={inputStyle}
            />
          </label>

          <br />
          <div className="flex justify-center">
            <button
              className="border-2 border-main rounded px-4 py-2 hover:bg-main hover:text-white transition"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
