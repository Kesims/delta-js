import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {SearchBar} from "./components/SearchBar";
import {DayList} from "./components/DayList";
import {CurrentWeather} from "./components/CurrentWeather";
import {TemperatureGraph} from "./components/TemperatureGraph";


function App() {
    const [location, setLocation] = useState<string>("Pardubice");

    function setLocationHandler(newLocation: string): void {
        setLocation(newLocation);
    }

  return (
    <div className="App">
        <SearchBar location={location} setLocationHandler={setLocationHandler}/>
        <DayList location={location}></DayList>
    </div>
  )
}

export default App
