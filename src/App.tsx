import React, { Component } from "react";
import {
  User,
  Counter,
  PropsComp,
  GetInput,
  HandleForm,
  ConstructorComp,
  RenderComp
} from "./components";



type MyState = {
  name: string;
};


class App extends Component<{},MyState> {

  constructor(props:{}) {
    super(props);
    this.state = {
      name:"Alfaiz",
    };
  }

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
          <RenderComp name={this.state.name} />
          <button onClick={()=>this.setState({name:"Alfaiz Khan"})}>Update Name</button>
        </div>
      </>
    );
  }
}

export default App;
