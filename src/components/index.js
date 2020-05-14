import React,{Component} from 'react'
import "./styles.css"
// import axios from 'axios'
import Tbilisi from './currentWeather/tbilisi'
import Kutaisi from './currentWeather/kutaisi'
import Batumi from './currentWeather/batumi'
import { Link } from 'react-router-dom';

export default class Weather extends Component{
    constructor(){
        super();
        this.state={
            mainTbilisi:[],
            mainKutaisi:[],
            mainBatumi:[],
            weatherTbilisi:[],
            weatherKutaisi:[],
            weatherBatumi:[],
            listTbilisi:[],
            listKutaisi:[],
            listBatumi:[],
            date:undefined,
            cityTbilisi:undefined,
            cityKutaisi:undefined,
            cityBatumi:undefined,
            descriptionTbilisi:undefined,
            descriptionKutaisi:undefined,
            descriptionBatumi: undefined,
            error:undefined,
            celsius:true
        }
    }
    componentDidMount= async (e)=>{
        const city=[611717,613607,615532];
        for(var i=0;i<city.length;i++){
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city[i]}&cnt=40&appid=9b41bd9f7384c942d57c1166d2943ce6`);
            const response = await api_call.json();
            switch(i){
                case 0:
                    this.setState({
                        mainTbilisi: response.list[0].main,
                        listTbilisi:response.list,
                        date:response.list[0].dt_txt,
                        weatherTbilisi:response.list[0].weather[0],
                        cityTbilisi: response.city.name,
                        descriptionTbilisi: response.weather,
                        error: ""
                    })
                    break;
                case 1:
                    this.setState({
                        mainKutaisi: response.list[0].main,
                        listKutaisi:response.list,
                        date:response.list[0].dt_txt,
                        weatherKutaisi:response.list[0].weather[0],
                        cityKutaisi: response.city.name,
                        descriptionKutaisi: response.weather,
                        error: ""
                    })
                    break;
                case 2:
                    this.setState({
                        mainBatumi: response.list[0].main,
                        listBatumi:response.list,
                        date:response.list[0].dt_txt,
                        weatherBatumi:response.list[0].weather[0],
                        cityBatumi: response.city.name,
                        descriptionBatumi: response.weather,
                        error: ""      
                })
                break;
            }
        }   
    }
    render(){
        const celsiusTbilisi = this.state.celsius?this.state.mainTbilisi.temp-273.15:this.state.mainTbilisi.temp*9/5-459.67
        const maxTbilisi = this.state.celsius?this.state.mainTbilisi.temp_max-273.15:this.state.mainTbilisi.temp_max*9/5-459.67
        const minTbilisi = this.state.celsius?this.state.mainTbilisi.temp_min-273.15:this.state.mainTbilisi.temp_min*9/5-459.67

        const celsiusKutaisi = this.state.celsius?this.state.mainKutaisi.temp-273.15:this.state.mainKutaisi.temp*9/5-459.67
        const maxKutaisi = this.state.celsius?this.state.mainKutaisi.temp_max-273.15:this.state.mainKutaisi.temp_max*9/5-459.67
        const minKutaisi = this.state.celsius?this.state.mainKutaisi.temp_min-273.15:this.state.mainKutaisi.temp_min*9/5-459.67

        const celsiusBatumi = this.state.celsius?this.state.mainBatumi.temp-273.15:this.state.mainBatumi.temp*9/5-459.67
        const maxBatumi = this.state.celsius?this.state.mainBatumi.temp_max-273.15:this.state.mainBatumi.temp_max*9/5-459.67
        const minBatumi = this.state.celsius?this.state.mainBatumi.temp_min-273.15:this.state.mainBatumi.temp_min*9/5-459.67
        return(
            <div>
                <header>
                <button className="celsius" onClick={()=>this.setState({celsius:!this.state.celsius})}
                  ><sup>0</sup>{this.state.celsius?"F":"C"}</button>
                </header>
                <main>
            <Link to={{pathname:"/tbilisi_weekly_forecast"}} title="weekly weather forecast">
                <Tbilisi 
                    city={this.state.cityTbilisi}
                    celsius={celsiusTbilisi}
                    cels={this.state.celsius}
                    max={maxTbilisi}
                    min={minTbilisi}
                    main={this.state.mainTbilisi}
                    weather={this.state.weatherTbilisi}
                    date={this.state.date}
                    />
            </Link >
            <Link to={{pathname:"/kutaisi_weekly_forecast"}}  title="weekly weather forecast" >
                <Kutaisi
                    city={this.state.cityKutaisi}
                    celsius={celsiusKutaisi}
                    cels={this.state.celsius}
                    max={maxKutaisi}
                    min={minKutaisi}
                    main={this.state.mainKutaisi}
                    weather={this.state.weatherKutaisi}
                    date={this.state.date}
                    />
            </Link>
            <Link to={{pathname:"/batumi_weekly_forecast"}}  title="weekly weather forecast">
                <Batumi
                    city={this.state.cityBatumi}
                    celsius={celsiusBatumi}
                    cels={this.state.celsius}
                    max={maxBatumi}
                    min={minBatumi}
                    main={this.state.mainBatumi}
                    weather={this.state.weatherBatumi}
                    date={this.state.date}
                    />
            </Link>
                </main>
            </div>
        )
    }
}