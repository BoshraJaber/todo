import React,{useContext} from "react";
import ToDo from "./components/todo/todo.js";
import Navbar from "./Styling/Navbar";

import Auth from "./Auth/auth";

import { LoginContext } from "./Auth/context";
import { If, Else, Then } from 'react-if';

const EditLink = (props) => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = (props) => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

function App() {
  const context = useContext(LoginContext);
  // console.log('why error here',x);
  return (
    <>
      <Navbar />
      <If condition={context.loggedIn}>
        <Then>
          <ToDo />
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
      <EditLink />
      <DeleteLink />
    </>
  );
}

export default App;
