import React from "react";
import { Badge, Toast } from "react-bootstrap";
import { If, Then, Else } from "react-if";

function TodoList(props) {
  return (
    <>
      {props.list.map((item) => (
        <Toast
          // bg={"light"}
          // key={item._id}
          // className="rounded mr-2"
          
          style={{ width: "100%", height:'auto',display: "flex",  flexDirection: 'column'}}
          onClose={() => props.handleDelete(item._id)}
        >
            <Toast.Header style={{ justifyContent: 'space-between'}}>
              <If condition={item.complete === false}>
                <Then>
                <Badge onClick={() => props.handleComplete(item._id)} pill variant="success">
                <strong className="mr-auto"> pending</strong>
              </Badge>{"     "}
                </Then>
                <Else>
                <Badge onClick={() => props.handleComplete(item._id)}  pill variant="danger">
                <strong className="mr-auto"> complete </strong>
              </Badge>{"      "}
                </Else>
              </If>
             {item.assignee}
            </Toast.Header>
            <Toast.Body>
              {item.text}
              <br />
              <small className="mr-auto"  style={{ float: "right", }}> Difficulty: {item.difficulty}</small>
             
            </Toast.Body>
          
        </Toast>
      ))}
    </>
  );
}

export default TodoList;
