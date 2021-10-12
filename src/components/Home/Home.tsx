import React, { Component } from 'react';
import './Home.css';

export class Home extends Component<{}> {
    render() {
        return(
            <>
                <div className="container-fluid text-center border navBar">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="user">User</a></li>
                            <li><a href="/">Counter</a></li>
                            <li><a href="/">Props-Component</a></li>
                            <li><a href="/">Get-Input</a></li>
                            <li><a href="/">Handle-Form</a></li>
                            <li><a href="/">Constructor-Component</a></li>
                            <li><a href="/">Render-Component</a></li>
                            <li><a href="/">Component-Did-Mount</a></li>
                            <li><a href="/">Component-Did-Update</a></li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
}
