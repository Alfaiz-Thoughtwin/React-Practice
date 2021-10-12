import React, { Component } from 'react';



type MyState = {
    counter: number;
};
export class ShouldComponentUpdate extends Component<{},MyState> {

    constructor(props:{}) {
        super(props);
        this.state = {
            counter: 0,
        };
    };

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate()", this.state.counter);
        if (this.state.counter > 3  && this.state.counter <10) {
            return true;
        }
        return false;
    };

    render() {
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Should-Component-Update</h1>
                    <h2>Counter : { this.state.counter }</h2>
                    <button onClick={() => this.setState({ counter: this.state.counter - 1})} className="mx-2 my-2">Increase</button>
                    <button onClick={() => this.setState({ counter: this.state.counter + 1})} className="my-2">Decrease</button>
                    <p className="text-muted">(State Updates on DOM only when shouldComponentUpdate() return true)</p>
                </div>
            </>
        );
    }
}
