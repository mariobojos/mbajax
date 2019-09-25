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
        this.setState(prevState => {isLoading: !prevState.isLoading});
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
                {this.state.isLoading && <label>Fetching Star Wars characters...</label>
                }
                <p>
                    <span>Name: {this.state.person.name}</span><br/>
                    <span>Height: {this.state.person.height}</span><br/>
                    <span>Mass: {this.state.person.mass}</span><br/>
                    <span>Hair Color: {this.state.person.hair_color}</span><br/>
                </p>
            </div>
        );
    }

}