import React,{Component} from 'react'
import axios from 'axios'
export default class DailyWeather extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }

    render(){
        const celsius = this.props.celsius?this.props.list.main.temp-273.15:this.props.list.main.temp*-457.87
        return(
       
        <div class="daily">
            <time>{this.props.list.dt_txt}</time>
            <h1>{Math.round(celsius*100)/100}<sup>0</sup>{this.props.celsius===true?"C":"F"}</h1>
            <ul>
            <li>humidity:{this.props.list.main.humidity}</li>
            <li>wind speed:{this.props.list.wind.speed}</li>

            <li><b class="description">{this.props.list.weather[0].description}</b></li>
            </ul>
        </div>
    )
}
}