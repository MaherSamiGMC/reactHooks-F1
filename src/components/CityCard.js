import React from 'react'
import {Card,Button} from 'react-bootstrap'
function CityCard({city,description,img}) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title> {city} </Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Button variant="primary">Go {city}</Button>
        </Card.Body>
        </Card>
    )
}

export default CityCard
