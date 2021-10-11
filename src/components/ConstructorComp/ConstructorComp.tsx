import React, { Component } from 'react';


export class ConstructorComp extends Component<{}> {

    constructor(props:{}) {
        super(props);
        console.log("Constructor Call");
    };

    render() {
        console.log("Render Call");
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Constructor (Class-Based-Components)</h1>
                </div>
            </>
        );
    }
}