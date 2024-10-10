import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

const App = () => {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync karwadenge.
  const [name, setName] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(true);
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }

  return (
    <>
      <div>
        {/* (isLoggedIn)?
        <LogoutBtn />:<LoginBtn /> */}
        {isLoggedIn && <LogoutBtn />}
      </div>
      <div>
        <Card title="Card1" name={name} setName={setName} />
        <Card title="Card2" name={name} setName={setName} />
        {/* <p>I am inside Parent component and value of name is {name}</p> */}
      </div>
    </>
  );
};

export default App;
