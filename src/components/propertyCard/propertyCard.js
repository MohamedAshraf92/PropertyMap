import React from 'react'
import { BsFillBookmarksFill } from "react-icons/bs"

import './propertyCard.css'

const PropertyCard = (props) => {
    return (
        <div className="property-card">
            <div className="property-photo">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="property-dateil">
                <h3>{props.name}</h3>
                <h4>{props.description}</h4>
                <BsFillBookmarksFill className="star-icon"/>
            </div>
        </div>
    )
}

export default PropertyCard