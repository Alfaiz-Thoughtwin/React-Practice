// Class-Based :
import React, { Component } from "react";

export class User extends Component {
  render() {
    const clickfunc = () => {
      alert("Function Called on Click");
    };
    return (
      <div className="container text-center">
        <h1>This is User.tsx (Class-Based)</h1>
        <button onClick={clickfunc}>Click Me</button>
      </div>
    );
  }
}

// Function-Based :
/*
import React from 'react';

export const User = () => {
    return (
        <>
            <div className="container text-center">
                <h1>This is User.tsx (Function-Based)</h1>
            </div>
        </>
    )
};
*/
