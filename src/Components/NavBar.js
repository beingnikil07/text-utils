import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  /* To use props in a functional based component we have to write props in function argv area */
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlfor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
      </nav>
    </div>
  );
}

// Props can be an array,string,object etc
NavBar.propTypes = {
  // only string can be passed,This is how we can prevent  wrong props data
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "set title here",
  about: "set about here",
};
