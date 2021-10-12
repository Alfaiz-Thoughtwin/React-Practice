import React, { Component } from 'react';


export class Student extends Component<{}> {

    componentWillUnmount() {
        alert("componentWillUnmount Called !!!");
    };

    render() {
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Student Component (Child)</h1>
                </div>
            </>
        );
    }
}
