import React, { Component } from 'react';
import '../css/default.css'

export default class Default extends Component {
    render() {
        return (
            <div className="default-div">
                <h1 className="big-h">404</h1>
                <h1>ERROR</h1>
                <h2 className="bold-h">PAGE NOT FOUND</h2>
                <h2>The Requested URL <span className="red-span" >{this.props.location.pathname}</span> was not found.</h2>
            </div>
        )
    }
}

