import React, { useEffect, useState } from 'react'

import './propertiesList.css'
import axios from '../../axios'
import PropertyCard from '../propertyCard/propertyCard'
import Spinner from '../spinner/spinner'

const PropertiesList = (props) => {

    const [properties, setProperties] = useState([])

    const getProperties = () => {
        axios.get('/properties.json').then(res => {
            setProperties(Object.values(Object.values(res.data)))
        }).catch(err => window.alert('Failed to get properties data'))
    }
    
    useEffect(() => {
        getProperties()
    }, [])

    const cards = properties.map(property => {
        return (
            <PropertyCard 
                key={property.id}
                name={property.name}
                image={property.photos[0]}
                description={property.description}
            />
        )
    })

    if (properties.length === 0) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div className="properties-list">
                {cards}
            </div>
        )
    }
}

export default PropertiesList