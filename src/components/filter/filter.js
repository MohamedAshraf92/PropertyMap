import React from 'react'
import { RiFilter2Fill } from "react-icons/ri"

import './filter.css'

const Filter = (props) => {
    return (
        <div className="filter">
            <h2>Filter results by:</h2>
            <div className="filter-block">
                <h3>City:</h3>
                <select>
                    <option defaultValue>Cairo</option>
                    <option>London</option>
                    <option>New York</option>
                    <option>Paris</option>
                </select>
                <RiFilter2Fill className="filter-icon" />
            </div>
            <div className="filter-block">
                <h3>Price:</h3>
                <select>
                    <option defaultValue>Upto 500K</option>
                    <option>Upto 1M</option>
                    <option>Upto 2M</option>
                    <option>Upto 5M</option>
                    <option>Upto 10M</option>
                    <option>More than 10M</option>
                </select>
                <RiFilter2Fill className="filter-icon" />
            </div>
            <div className="filter-block">
                <h3>Bedrooms:</h3>
                <select>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10+</option>
                </select>
                <RiFilter2Fill className="filter-icon" />
            </div>
            <div className="filter-block">
                <h3>Added date:</h3>
                <select>
                    <option>This week</option>
                    <option>last 4 weeks</option>
                    <option>Last 15 weeks</option>
                    <option defaultValue>Any</option>
                </select>
                <RiFilter2Fill className="filter-icon" />
            </div>
        </div>
    )
}

export default Filter