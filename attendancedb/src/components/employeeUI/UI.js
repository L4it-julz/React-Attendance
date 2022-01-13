import React from "react";

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Employee = () => {
    return (
        <Card border="light" style={{ width: '18rem' }}>
    <Card.Header>Employee Info</Card.Header>
    <Card.Body>
    <Form>
          <Form.Group className="mb-4" controlId="formEmployee">
            <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                    <FormControl
                    placeholder="lastname"
                    aria-label="lastname"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                    <FormControl
                    placeholder="firstname"
                    aria-label="firstname"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
                    <FormControl
                    placeholder="location"
                    aria-label="location"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Assign</InputGroup.Text>
                    <FormControl
                    placeholder="assign"
                    aria-label="assign"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>

            
        </Form.Group>
        </Form>
        
    </Card.Body>
  </Card>
        
    );
}

export default Employee;