import React, { FC } from 'react';

const Menu: FC = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          Stories <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="post.html">
          Post
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="author.html">
          Author
        </a>
      </li>
    </ul>
  );
};

export default Menu;
