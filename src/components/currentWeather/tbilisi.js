import React,{Component} from 'react'
export default class Tbilisi  extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="city">
                <center>  <h4>{this.props.city}</h4></center>
                <time>{this.props.date}</time>
                <h1>{Math.round(this.props.celsius*100)/100}<sup>0</sup>{this.props.cels===true?"C":"F"}</h1>
                <ul>
                    <li>max temp:{Math.round(this.props.max*100)/100}<sup>0</sup>{this.props.cels===true?"C":"F"}</li>
                    <li>min temp:{Math.round(this.props.min*100)/100}<sup>0</sup>{this.props.cels===true?"C":"F"}</li>
                    <li>humidity:{this.props.main.humidity}</li>
                    <li><b class="description">{this.props.weather.description}</b></li> 
                </ul>
            </div>
        )
    }
}
