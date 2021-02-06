import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = (props) => {
    return (
        <div className="navbar-banner">
            <div className='navbar-main'>
                <div className="brand">
                    <p>PropertyMap</p>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>
                            <NavLink to='/home' className='link' activeClassName='active-link'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to='/addProperty' className='link' activeClassName='active-link'>ADD PROPERTY</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar