import React from 'react'

import './home.css'
import Filter from "../../components/filter/filter"
import PropertiesList from '../../components/propertiesList/propertiesList'
import Recent from '../../components/recent/recent'

const Home = (props) => {
    return (
        <div className="home">
            <Filter />
            <PropertiesList />
            <Recent />
        </div>
    )
}

export default Home