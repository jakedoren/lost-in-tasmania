import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {

    const currentYear = new Date().getFullYear()

    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer style={{backgroundColor: "#7a9ec2", padding: "80px"}}>
                <p>Copyright {currentYear} </p>
            </footer>
        </div>
    )
}

export default Layout
