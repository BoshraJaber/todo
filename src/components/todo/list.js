import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function TodoList(props) {

    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
          action ={true}
          variant={item.complete ? 'danger' : 'success'}
         
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}  /  {item.assignee}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );

}

export default TodoList;

{/* <>
  <>No style</>
  <ListGroup.Item variant="primary">Primary</ListGroup.Item>
  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
  <ListGroup.Item variant="success">Success</ListGroup.Item>
  <ListGroup.Item variant="danger">Danger</ListGroup.Item>
  <ListGroup.Item variant="warning">Warning</ListGroup.Item>
  <ListGroup.Item variant="info">Info</ListGroup.Item>
  <ListGroup.Item variant="light">Light</ListGroup.Item>
  <ListGroup.Item variant="dark">Dark</ListGroup.Item>
</> */}
