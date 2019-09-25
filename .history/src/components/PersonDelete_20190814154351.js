/*jshint esversion:6*/
import React, {Component} from "react";
import axios from "axios";

export default class PersonDelete extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0 };
    }

    handleFormSubmit = event => {
        event.preventDefault();

        axios
        .post(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    handleIdChange = event=> {
        
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="fldId">Person ID:
                    <input type="number" id="fldId" name="id" onChange={this.handleIdChange} />
                </label>
                <button type="submit">Delete</button>
            </form>
        );
    }
}