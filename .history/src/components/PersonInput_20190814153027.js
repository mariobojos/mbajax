/*jshint esversion:6*/
import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleSubmit = (event => {
        event.preventDefault();

        const user = { name: this.state.name };

        axios
        .post("https://jsonplaceholder.typicode.com/users", {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}></form>
        );
    }

}