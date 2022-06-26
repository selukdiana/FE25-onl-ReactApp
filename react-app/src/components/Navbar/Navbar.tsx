import exp from 'constants';
import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <Logo></Logo>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <Menu></Menu>
          <Search></Search>
        </div>
      </div>
    </nav>
  );
};

export default Navbar