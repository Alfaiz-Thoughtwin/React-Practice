// Class-Based :
import React, { Component } from "react";


type MyState = {
  name?: string;
  isTrue?: boolean;
};
export class User extends Component<{}, MyState> {

  constructor (props:{}) {
    super(props);
    this.state = {
      name: "Alfaiz",
      isTrue: true,
    };
  };

  moreInfoHandle = (event:any) => {
    event.preventDefault();
    this.setState({ isTrue: !this.state.isTrue });
  }

  render() {
   
    return (
      <div className="container text-center">
        <h1>This is User.tsx (Class-Based)</h1>
        <h1>User : { this.state.name }</h1>
        <div>
          <button onClick={this.moreInfoHandle} style={{backgroundColor:"black", border:"none", color:"white"}}>More Info</button>
          { this.state.isTrue ? (
            <div className="border">
              <p>I Am React Developer</p>
            </div>
          ) : (
            <div className="border">
              <p>I Am Footballer</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
