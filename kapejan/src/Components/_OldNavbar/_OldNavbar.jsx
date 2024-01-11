import React from 'react';
import './Navbar.css';
const _OldNavbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav-logo">
                    <h1>Kapejan</h1>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="navbar__cart">
                    <span>0</span>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    )
}
// export default Navbar;