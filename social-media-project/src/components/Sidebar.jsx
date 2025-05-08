import React from "react";
import '../App.css'

const Sidebar = ({selectedTab,setSelectedTab}) => {
 
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sideBar"
      style={{width: '280px'}}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        {" "}
        <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4">SOCIAL MEDIA</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item" onClick={() => setSelectedTab('Home')}>
          {" "}
          <a href="#" className={`nav-link text-black ${selectedTab === 'Home' && 'active'}`} aria-current="page">
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li onClick={() => setSelectedTab('Create Post')}>
          {" "}
          <a href="#" className={`nav-link text-black ${selectedTab === 'Create Post' && 'active'}`}>
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src="https://avatars.githubusercontent.com/u/114055107?v=4"
            alt=""
            width="50"
            height="50"
            className="rounded-circle me-2"
          />{" "}
          <strong>Afreedi Shaik</strong>{" "}
        </a>{" "}
        <ul className="dropdown-menu text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Sidebar;
