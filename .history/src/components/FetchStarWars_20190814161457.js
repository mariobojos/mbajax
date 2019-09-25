/*jshint esversion:6*/
import React from "react";

export default class FetchStarWars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        };
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    person: data
                });
            });
    }

    render() {
        return (
            <div>
                <label>Fetching Star Wars characters...</label>
                <p>
                    <span>Name {this.state.person.name}</span>
                </p>
            </div>
        );
    }

}