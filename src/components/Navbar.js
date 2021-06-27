import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1>Home</h1>
                <div className="links">
                    <Link to="/">About</Link>
                    <Link to="/author">Author</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
