import React from "react";

const Content = () => {
  return (
    <div id="content">
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link href="/articles/[id]" as={"/articles/" + a.id}>
              <a>{a.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {loggedIn && <CreatePost />}
    </div>
  );
};

export default Content;
