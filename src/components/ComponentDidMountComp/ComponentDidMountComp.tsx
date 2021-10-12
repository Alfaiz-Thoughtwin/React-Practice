import React, { Component } from 'react';


type MyState = {
    name: string;
};

export class ComponentDidMountComp extends Component<{},MyState> {

    constructor (props:{}) {
        super(props);
        this.state = {name:"Alfaiz"};
        console.log("ComponentDidMountComp Code 👇");
    }

    componentDidMount () {
        console.log("ComponentDidMount () Call (ComponentDidMountComp)");
    };

    render() {
        console.log("Render() Call (ComponentDidMountComp)");
        return (
            <div className="container text-center border my-4">
                <h1><strong>Component-Did-Mount-Component</strong></h1>
                <h3>Name : { this.state.name }</h3>
                <button onClick={()=>this.setState({name:"Alfaiz Khan"})} >Update Name</button>
            </div>
        );
    }
}
