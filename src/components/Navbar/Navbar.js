import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <header className='toolbar'>
        <nav className="toolbar-navigation">
            <div className="toolbar-navigation-items">
                <ul>
                    {props.children}
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;