import { useState, useEffect } from 'react';
import fire from '../config/fire-conf';
import Head from 'next/head';
import Header from '../components/header';
import Home from '../components/home';
import Footer from '../components/footer';

const Index = () => {
  const [notification, setNotification] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // fire.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  // const handleLogout = () => {
  //   fire
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setNotification('Logged out');
  //       setTimeout(() => {
  //         setNotification('');
  //       }, 2000);
  //     });
  // };

  return (
    <div id="indexContainer" className="flex flex-col min-h-screen">
      <Head>
        <title>Gulag Anthem | Home</title>
      </Head>
      <Header
      // notification={notification}
      // loggedIn={loggedIn}
      // handleLogout={handleLogout}
      />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
