import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styles.css'
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-background">
                <h1>Paradise Nursery</h1>
                <p>Welcome to Paradise Nursery, your one-stop shop for a variety of house plants. Discover our aromatic and medicinal plants that bring beauty and tranquility to your home.</p>
                <div className="spacer"></div>
                <Link to="/products" className="get-started-button">Get Started</Link>
            </div>
        </div>
    )
}

export default LandingPage