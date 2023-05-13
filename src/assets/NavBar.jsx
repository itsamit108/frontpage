import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#3339cd' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand navbar-dark text-white" to="/">
                        <h4>FrontPage</h4>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="about">
                                    <h6>About</h6>
                                </Link>
                            </li>
                            <h6>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link className="dropdown-item text-dark" to="business">
                                                <h6>Business</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-dark" to="entertainment">
                                                <h6>Entertainment</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-dark" to="general">
                                                <h6>General</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-dark" to="health">
                                                <h6>Health</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-dark" to="science">
                                                <h6>Science</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-dark" to="sports">
                                                <h6>Sports</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-dark" to="technology">
                                                <h6>Technology</h6>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </h6>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default NavBar;
