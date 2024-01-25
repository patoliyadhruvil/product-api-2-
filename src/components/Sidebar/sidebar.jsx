import React from 'react';

const Sidebar = () => {
  return (
    <div className="pagebody-wrapper d-flex">
      <div className="slidebar vh-100">
        <ul>
          <li>
            <a href="loginform.html">
              <span>Dashoard</span>
            </a>
          </li>
          <li>
            <a href="signup.html">
              <span>Chats</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Mail</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Todo List</span>
            </a>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <span>File Manager</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Calender</span>
            </a>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <span>Gallery</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Invoice</span>
            </a>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <span>E-Commerce</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Forms</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Components</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> Plugins </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Pages</span>
            </a>
          </li>
        </ul>
      </div>
      </div>
  );
};

export default Sidebar;
