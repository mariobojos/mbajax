/*jshint esversion:6*/
import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleFormSubmit = event => {
        event.preventDefault();

        const user = { name: this.state.name };

        axios
        .post("https://jsonplaceholder.typicode.com/users", {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    handleTextChange = event => {
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" onChange={this.handleTextChange} />
                <button type="submit">Add</button>
            </form>
        );
    }

}