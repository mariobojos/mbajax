/*jshint esversion:6*/
import React from "react";

export default class FetchStarWars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            person: []
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
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
        const text = this.state.isLoading ? <label>Fetching Star Wars characters...</label> : this.state.person.name;
        return (
            <div>
                <p>
                    <span>Name: {text}</span><br/>
                    <span>Height: {this.state.person.height}</span><br/>
                    <span>Mass: {this.state.person.mass}</span><br/>
                    <span>Hair Color: {this.state.person.hair_color}</span><br/>
                </p>
            </div>
        );
    }

}