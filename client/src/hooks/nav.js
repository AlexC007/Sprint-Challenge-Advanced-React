import React, { useState } from 'react';
import useDarkMode from "./useDarkMode";

const Nav = () => {
  const [values, setValues] = useDarkMode("true");
  const toggleMode = e => {
    e.preventDefault();
    setValues(!values);
  };
  return (
    <nav className="nav">
      <h1>Click this cool button to enter...Dark Mode ➜➜➜➜➜</h1>
      <div className="dkClicked">
        <div
          onClick={toggleMode}
          className={values ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Nav;