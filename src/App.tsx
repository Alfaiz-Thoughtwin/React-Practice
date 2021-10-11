import React, { Component } from "react";
import {
  User,
  Counter,
  PropsComp,
  GetInput,
  HandleForm,
  ConstructorComp
} from "./components";

class App extends Component {
  render() {
    return (
      <>
        <div className="container text-center">
          <h1>This is App.tsx</h1>
          <User />
          <Counter />
          <PropsComp name={`Alfaiz Khan`} role={`React Developer`} age={23} />
          <PropsComp name={`Cristiano Ronaldo`} role={`Superstar Footballer`} age={36} />
          <GetInput />
          <HandleForm />
          <ConstructorComp />
        </div>
      </>
    );
  }
}

export default App;
