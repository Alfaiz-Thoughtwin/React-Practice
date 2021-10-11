import React, { Component } from 'react';


type MyState = {
    name: string;
    language: string
    tnc: boolean;
    testName: string;
    testError: boolean;
};

export class HandleForm extends Component<{}, MyState> {

    constructor(props:{}) {
        super(props);
        this.state = {
            name:"",
            language: "",
            tnc: false,
            testName: "",
            testError: false,
        };
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
        if ((this.state.name && this.state.language) || (this.state.tnc)) {
            console.log(this.state.name, this.state.language, this.state.tnc);
            this.setState({ name:"", language:"",tnc: false });   
        } else {
            alert(`Please Fill Valid Details`);
        }
    }

    validationHandler = (e:any) => {
        let valName = e.target.value;
        // let nameREG = /^[a-zA-Z ]{2,30}$/;

        this.setState({ testName: e.target.value})

        if (valName.length <= 3) {
            this.setState({testError: true});
        } else {
            this.setState({testError: false});
        }
    };

    render()
    {
        return (
            <>
                <div className="container text-center border my-4">
                    <h1>Handle Form With Class-Based Component</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter Name" value={this.state.name} onChange={(e)=>this.setState({ name: e.target.value})}/><br /><br />
                        <select value={this.state.language} onChange={(e)=>this.setState({ language: e.target.value})}>
                            <option value="selected">Select Option</option>
                            <option value="react">React</option>
                            <option value="python">Python</option>
                            <option value="django">Django</option>
                            <option value="angular">Angular</option>
                        </select><br /><br />
                        <input type="checkbox" onChange={(e)=>this.setState({ tnc: e.target.checked})}/> <span>Accept Terms & Conditions</span><br /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div><hr />

                <div className="container text-center border my-4">
                    <form>
                        { this.state.testError ? <span style={{color:"red"}}>Name Not Valid</span> : null }
                        <input value={this.state.testName} onChange={this.validationHandler} type="text" placeholder="Enter Name"/>
                    </form>
                </div>
            </>
        );
    }
}