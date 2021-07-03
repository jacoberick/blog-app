import { useState } from 'react';
import fire from '../../config/fire-conf';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');
  const [notification, setNotification] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password !== passConf) {
      setNotification('Passwords do not match.');

      setTimeout(() => {
        setNotification('');
      }, 2000);

      setPassword('');
      setPassConf('');
      return null;
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message);
      });
    router.push('/');
  };

  return (
    <div>
      <h2>Create new user</h2>
      {notification}
      <form onSubmit={handleLogin}>
        Email:
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <br />
        Password
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        Confirm Password
        <input
          type="text"
          value={passConf}
          onChange={({ target }) => setPassConf(target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
