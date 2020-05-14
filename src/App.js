import React from 'react';
// import Weather from './components/weekly/tbilisiWeather'
import Weather from './components/index'
import Tbilisi from './components/weekly/tbilisiWeather'
import Kutaisi from './components/weekly/kutaisiWeather'
import Batumi from './components/weekly/batumiWeather'
import {
  BrowserRouter ,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Weather}/>
        <Route exact path='/tbilisi_weekly_forecast' component={Tbilisi} />
        <Route exact path='/kutaisi_weekly_forecast' component={Kutaisi} />
        <Route exact path='/batumi_weekly_forecast' component={Batumi} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
