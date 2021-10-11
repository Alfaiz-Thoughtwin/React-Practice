import React, { Component } from 'react';


type MyProps = {
    name: string;
    role: string;
    age: number;
};

type MyState = {
    isTrue: boolean;
};

export class PropsComp extends Component<MyProps, MyState> {

    constructor(props:MyProps) {
        super(props);
        this.state = {
            isTrue: false,
        };
    };

    propsHandler = (event:any) => {
        event.preventDefault();
        this.setState({ isTrue: true });
    };

    render() {
        console.warn("Props (PropsComp) : ", this.props);
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Props Component with Class Based</h1>
                    <button onClick={this.propsHandler }>Click</button>
                    <button onClick={()=> this.setState({ isTrue: false })} className="mx-1">Hide</button>
                    {/* { this.state.isTrue && 
                        <>
                            <h3>Name : { this.props.name }</h3>
                            <h3>Role : { this.props.role }</h3>
                            <h3>Age : { this.props.age }</h3>
                        </>
                    } */}
                    { this.state.isTrue ? ( 
                        <>
                            <h3>Name : { this.props.name }</h3>
                            <h3>Role : { this.props.role }</h3>
                            <h3>Age : { this.props.age }</h3>
                        </>
                        ) : null
                    }
                </div>
            </>
        );
    }
}
