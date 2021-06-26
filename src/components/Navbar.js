import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img src="/logo.png" alt="logo" className="nav-logo" />
                <div className="links">
                    <Link to="/">About</Link>
                    <Link to="/author">Author</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
