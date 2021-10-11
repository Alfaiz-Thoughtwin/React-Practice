import React, { Component } from 'react';
import './Counter.css';

type MyState = {
    count: number;
};

export class Counter extends Component<{},MyState> {

    constructor(props:{}) {
        super(props);
        this.state = {count: 0};
    };

    render() {
        return(
            <div className="container text-center border my-4">
                <h1>Counter</h1>
                <div className="mt-4">
                        <button onClick={()=>this.setState({count: this.state.count-1})} className="buttonCounter mx-2" title="Decrement"><span>👎</span></button>
                        <input type="text" value={ this.state.count } onChange={e=>e.target.value} className="text-center fs-4" name="counterField" />
                        <button onClick={()=>this.setState({count: this.state.count+1})} className="buttonCounter mx-2" title="Increment"><span>👍</span></button>
                </div>
            </div>
        );
    }
};
