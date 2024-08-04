import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styles.css'
const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">Paradise Nursery</Link>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart ({cartCount})</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar