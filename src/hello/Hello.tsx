import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import helloService from "./services/hello-service";

export default function Hello(){

    const [name, setName] = useState("Test");
    const [updatedName, setUpdatedName] = useState("");

    useEffect(() =>{
        /*fetch("http://localhost:8080/devices/get-name")
            .then(response => response.json())
            .then(data =>{
                setName(data);
            });*/
        const result = helloService.getName();
        result.then(theName => {
            setName(theName);
        })
        
    },[]);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value;
        setUpdatedName(newValue);
    }

    const handleNameSubmit = () => {
        const result = helloService.changeName(updatedName);
        result.then(newName => {
            setName(newName);
        })
    }

    return <div>
        Hello {name}<br/>
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" onChange={handleNameChange} value={updatedName} placeholder="Please enter your name" />
            </FormGroup>
            <Button onClick={handleNameSubmit} color="danger">Submit</Button>{' '}
        </Form>
    </div>;
}