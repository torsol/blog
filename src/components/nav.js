// Nav.js
import React from "react";
import { Link } from "gatsby";

import "./nav.css";

const Nav = () => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list-item">
                <Link
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to="/">
                    Alle innlegg
        </Link>
            </li>
            <li className="nav-list-item">
                <Link
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to="/meg">
                    Om Meg
       </Link>
            </li>
            <li className="nav-list-item">
                <Link
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to="/kontaktinfo">
                    Kontaktinfo
        </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;