import { useState } from 'react';
import fire from '../../config/fire-conf';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotification] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((res) => {
        setError(false);
        router.push('/');
      })
      .catch((err) => {
        setUsername('');
        setPassword('');
        setError(true);
        setNotification(err.message);
        setTimeout(() => {
          setNotification('');
        }, 2000);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {notify}
      <form onSubmit={handleLogin}>
        Email
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        Password
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
