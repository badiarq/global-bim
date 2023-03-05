import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="navbar">
            <nav>
                <Link to="/">
                    <h1>Home Page</h1>
                </Link>
                <Link to="/create">
                    <h1>Page 1</h1>
                </Link>
            </nav>
        </div>
    )
}
