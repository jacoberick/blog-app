import React, { useState } from "react";
import Link from "next/link";
import CreatePost from "../components/CreatePost";

const Header = ({
  notification,
  loggedIn,
  articles,
  handleLogout,
  hoverHighlight,
}) => {
  return (
    <div id="header" className="text-base text-white bg-jet">
      <div
        id="headerInner "
        className="py-4 px-24 flex justify-between content-center"
      >
        <h1 className="font-header text-3xl">Gulag Anthem</h1>
        <div id="navLinks" className="flex items-center">
          <Link href="/" passHref>
            <a className={`ml-8 ${hoverHighlight}`}>Articles</a>
          </Link>
          <Link href="/" passHref>
            <a className={`ml-8 ${hoverHighlight}`}>Books</a>
          </Link>
          <Link href="/" passHref>
            <a className={`ml-8 ${hoverHighlight}`}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
