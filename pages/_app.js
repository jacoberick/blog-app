import { useState, useEffect } from "react";
import fire from "../config/fire-conf";
import "../styles/global.css";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
