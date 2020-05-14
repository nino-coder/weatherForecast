import React,{Component} from 'react'
import Tbilisi from '../dailyWeather/tbilisiDaily'
import '../styles.css' 

export default class Weather extends Component{
    constructor(props){
        super(props);
        this.state={
            list: [],
            city: undefined,
            country: undefined,
            description: undefined,
            coord:undefined,
            error: undefined,
            celsius:true
        }
    }
  
  componentDidMount= async (e)=>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=611717&cnt=40&appid=9b41bd9f7384c942d57c1166d2943ce6`);
    const response = await api_call.json();
    console.log(response);
    if(true){
      this.setState({
        list: response.list,
        city: response.city.name,
        country: response.city.country,
        description: response.weather,
        error: ""
      })
    }else{
      this.setState({
        error: "something went wrong..."
      })
    }
  }
    render(){
        return(
            <div className="main">
                <header>
                  <button className="celsius" onClick={()=>this.setState({celsius:!this.state.celsius})}
                  ><sup>0</sup>{this.state.celsius?"F":"C"}</button>
                    <div className="about">
                        <dl>
                            <dt><b>country</b></dt>
                            <dd>GEORGIA</dd>
                            <dt><b>coordinates</b></dt>
                            <dd>41.6941 ; 44.8337 </dd>
                        </dl>
                        <h1 id="name">{this.state.city}</h1>
                    </div>
                </header>
                  <div className="wrapper">
                             {this.state.list.filter((i,key)=>key%8==0).map((info,key)=> (
                            <Tbilisi
                              celsius = {this.state.celsius}
                              list={info}
                              city={this.state.city.name}
                              country={this.state.country}
                              humidity={this.state.humidity}
                              description={this.state.description}
                              error={this.state.error}
                            />
                    ))} 
                </div>
            </div>
        )
    }
}