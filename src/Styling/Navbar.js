import { Navbar,Nav } from 'react-bootstrap'
import React from "react";

function Bar() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
  
export default Bar;