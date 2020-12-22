import React, { useState } from "react";

const Head = ({ loggedIn }) => {
  <title>Gulag Anthem</title>;
  {
    notification;
  }
  {
    !loggedIn ? (
      <div>
        <Link href="/users/register">
          <a>Register</a>
        </Link>{" "}
        |
        <Link href="/users/login">
          <a> Login</a>
        </Link>
      </div>
    ) : (
      <button onClick={handleLogout}>Logout</button>
    );
  }
};

export default Head;
