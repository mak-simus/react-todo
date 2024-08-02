import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">My Website</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/todo">To-Do List</Link></li>
            </ul>
        </nav>
    );
}