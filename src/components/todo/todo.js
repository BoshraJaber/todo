import React from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import { useEffect } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import useAjax from '../../customHooks/Ajax';
import SettingsProvider from '../../context/setting'

import "./todo.scss";

function ToDo(props) {
  const [list, _addItem, _toggleComplete, _getTodoItems, _deleteTask] = useAjax(props)

  useEffect(_getTodoItems, []);


  useEffect(() => {
    document.title =
      "To-do List " +
      list.filter((item) => !item.complete).length +
      " Completed/ " +
      list.filter((item) => item.complete).length +
      " Incompleted";
  });

  return (
    <SettingsProvider>
    <Container fluid="md">
      <br />
      <Row xs={7}>
        <Col>
          <Alert key="0" variant="primary">
            <Alert.Heading style={{ "text-align": "center" }}>
              There are {list.filter((item) => !item.complete).length} Items To
              Complete
            </Alert.Heading>
          </Alert>
        </Col>
      </Row>

      <section className="todo">
        <Row>
          <Col xs={5}>
            <TodoForm handleSubmit={_addItem} />
          </Col>

          <Col>
            <TodoList list={list} handleComplete={_toggleComplete}  handleDelete={_deleteTask}/>
          </Col>
        </Row>
      </section>
    </Container>
    </SettingsProvider>
  );
}

export default ToDo;
