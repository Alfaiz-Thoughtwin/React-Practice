import React, { Component } from 'react';


type MyState = {
    count: number;
};

export class ComponentDidUpdate extends Component<{}, MyState> {

    constructor (props:{}) {
        super(props);
        this.state = {
            count : 0,
        };
        console.log("ComponentDidUpdate Code 👇");
    };

    componentDidUpdate (preProps:{}, preState:MyState) {
        console.log(`Component Did Update ()`);
        console.log(`PrevState : ${preState.count} || CurrState ; ${this.state.count}`);

        if (preState.count === this.state.count) {
            alert("Previous & Current State's Data Are Same !!!");
        }
    };

    render(){
        return(
            <>
                <div className="container text-center border my-4">
                    <h1><strong>Component-Did-Update :</strong></h1>
                    <h3>Name : { this.state.count }</h3>
                    {/* <button onClick={()=>this.setState({ count: this.state.count+1 })} >Update</button> */}
                    <button onClick={()=>this.setState({ count: 1 })} >Update</button>
                </div>
            </>
        );
    }
}
