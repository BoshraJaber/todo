import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import Login from "../Auth/login";
import SignUp from "../Auth/signup";

function Bar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <SignUp />
        <Login />
      
      </Navbar>
    </>
  );
}

export default Bar;
