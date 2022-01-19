import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
function AddNewCity({addFunction}) {
    const [input, setInput] = useState({id:Math.random()})
    console.log(input)
    return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City name </Form.Label>
        <Form.Control type="text" onChange={(e)=>setInput({...input,city:e.target.value})} placeholder="Enter city name " />
        <Form.Label>City description</Form.Label>
        <Form.Control type="text" onChange={(e)=>setInput({...input,description:e.target.value})} placeholder="Enter city description" />
        <Form.Label>City image URL</Form.Label>
        <Form.Control type="text" onChange={(e)=>setInput({...input,imageUrl:e.target.value})} placeholder="Enter city image url" />
  
    </Form.Group>
    <Button onClick={()=>addFunction(input)} variant="primary" >
        Submit
    </Button>
    </Form>
    )
}

export default AddNewCity
