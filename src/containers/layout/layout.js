import React from 'react'

import './layout.css'
import Navbar from '../../components/navbar/navbar'

const Layout = (props) => {
    return (
        <div className='layout'>
            <Navbar/>
            <div className="container">
                {props.children}
            </div>
            footer
        </div>
    )
}

export default Layout