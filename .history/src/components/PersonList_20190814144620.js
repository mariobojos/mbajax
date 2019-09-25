/*jshint esversion:6*/
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/user")
        .then(res => {
            console.log(res);
            this.setState({
                people: res.data
            });
        });
    }

    render() {
        return (<ul>
            {this.state.people.map(person => <li>person.name</li>)}
        </ul>);
    }
}
