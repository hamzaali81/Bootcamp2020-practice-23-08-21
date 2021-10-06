import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
            <Link to="/">Home</Link>
                </li>
                <li>
            <Link to="/blog">Blog</Link>
                </li>
                <li>
            <Link to="/product">Product</Link>
                </li>
                <li>
            <Link to="/examples">Examples</Link>
                </li>
                <li>
            <Link to="/images">Images</Link>
                </li>
            </ul>
            h1
        </div>
    )
}

export default Navbar;
