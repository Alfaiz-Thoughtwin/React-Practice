import React, { Component } from 'react';


type MyState = {
    data: string;
    printData: boolean;
};

export class GetInput extends Component<{},MyState> {

    constructor(props:{}) {
        super(props);
        this.state = {
            data: "",
            printData: false
        };
    };

    getData = (event: any) => {
        this.setState({data: event.target.value})
        this.setState({ printData: false });
    };

    clickHandle = (event:any) => {
        event.preventDefault();
        this.setState({ printData: !this.state.printData });
    };

    render() {
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Get Input Box Value</h1>
                    <div>
                        <input type="text" onChange={this.getData}/>
                        <button onClick={this.clickHandle} className="mx-1">Print Data</button>
                    </div>
                    { this.state.printData ? (
                        <h2>Data : {this.state.data}</h2>
                    ) : null}
                </div>
            </>
        );
    }
}