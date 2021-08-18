import React, {Component} from 'react'
import ReactDom from "react-dom"

const api_key = 'bd1adec2d7a9145f13a97cdd03f0b0cf'
class App extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            city: 'Bursa',
            description: ''
        }
    }
    componentDidMount() {
        this.grabWeather(this.state.city);
    }

    grabWeather(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(response => console.log(response.json()))
            .then(json =>
            this.setState({description: json.description}))
    }
    render() {
        return(
            <div>
                <h1>Weather Report for {this.state.city}</h1>
                <h2> {this.state.description} </h2>
            </div>
        )
    }

}

ReactDom.render(<App />, document.getElementById('root'))
