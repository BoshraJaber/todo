import React from "react";
import { useState} from "react";
import {Button, Card, Form} from "react-bootstrap";

function TodoForm(props) {
  const [item, setItem] = useState({});
  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const items = {};
    setItem({ items });
  };

  return (
    <>
    <Card
bg={'light'}
key='6'
text={'light' === 'light' ? 'dark' : 'white'}
style={{ width: '100%' }}
className="mb-2"
>
      <Card.Header style={{ 'text-align': 'center' }}>Add Item</Card.Header>
      <Card.Body>
      {/* from here  */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add To Do List Item"
            name="text"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control
            type="range"
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            type="text"
            placeholder="Assigned To"
            onChange={handleInputChange}
            name="assignee"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>{" "}
      </Form>
      {/* to here  */}
      </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;


