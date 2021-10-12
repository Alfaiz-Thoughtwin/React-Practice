import React, { Component } from 'react';


type MyProps = {
    name: string;
};

export class RenderComp extends Component<MyProps> {
    constructor(props:MyProps) {
        super(props);
        console.log("RenderComp Code 👇");
        console.log("#################################", this.props);
    }
    render() {
        console.log("Render Method (RenderComp)");
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Render Life-Cycle Method (Class-Based-Component)</h1>
                    <h2>Name : {this.props.name}</h2>
                </div>
            </>
        );
    }
}
