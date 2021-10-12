import React, { Component } from 'react';
import { Student } from './Student';


type MyState = {
    show: boolean;
};

export class ComponentWillUnmount extends Component<{},MyState> {

    constructor (props:{}) {
        super(props);
        this.state = { show : true};
    };

    render() {
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Component-Will-Unmount (Parent)</h1>
                    { this.state.show ? <Student /> : <h2 className="text-muted">Child Component Removed</h2> }
                    <button onClick={()=>this.setState({ show : !this.state.show})} className="my-3">Toggle Child-Component</button>
                </div>
            </>
        );
    }
}
