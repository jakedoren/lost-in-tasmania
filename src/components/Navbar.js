import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const changeNavBackground = () => {
       if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        } 
    }

    


    window.addEventListener("scroll", changeNavBackground)
    
    return (
        <nav className={navbar && "nav-set" }>
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
