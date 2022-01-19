import React from 'react'
import CityCard from './CityCard'

function ListOfCities({LOfCities}) {
    return (
        <div style={{display:"flex",flexWrap:'wrap',justifyContent:'space-around'}} >
            {LOfCities.map(el=> <CityCard key={el.id} city={el.city} description={el.description} img={el.imageUrl} /> )}
        </div>
    )
}

export default ListOfCities
