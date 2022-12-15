import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  /* To use props in a functional based component we have to write props in function argv area */
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a
                  className="nav-a "
                  style={{
                    textDecoration: "none",
                    color: props.mode === "light" ? "black" : "white",
                  }}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`form-check form-switch w-25 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
            Dark Mode
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
