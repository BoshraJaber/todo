import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {useState, useEffect} from 'react'
import {Alert, Container, Row, Col} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'

import './todo.scss';

function ToDo (props){

  const [list, setList] = useState([])

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

 const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list1 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list1);
    }

  };

  useEffect( ()=>{
    let list2 =  [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    setList(list2);
  },[]);

  useEffect( () => {
    //complete/incomplete
    document.title = "To-do List " +
      list.filter((item) => !item.complete).length + " Completed/ " +
      list.filter((item) => item.complete).length + " Incompleted";
  });

    return (
      <Container fluid="md">
 <br/>
        <Row xs={7}>
          <Col>
          <Alert  key='0' variant='primary'>
      <Alert.Heading style={{ 'text-align': 'center' }}>There are {list.filter((item) => !item.complete).length} Items To
          Complete</Alert.Heading>
          </Alert>
          </Col>
        </Row>

 

        <section className="todo">
          <Row>

          <Col xs={5}>
            <TodoForm handleSubmit={addItem} />
          </Col>

          <Col >
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </Col>
          </Row>
        </section>
        
      </Container>
    );
  
}

export default ToDo;
