import React, {useState} from 'react';

import Nav from './Components/Nav';
import Cards from './Components/Cards';
// import Card from './components/Card.jsx'


export default function App() {
  const [cities , setCities] = useState([]) //definir un stado


  

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
 
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            feels_like: recurso.main.feels_like,
            humidity: recurso.main.humidity,
            pressure: recurso.main.pressure,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

    function onClose(id){
      setCities(oldCities =>oldCities.filter(c => c.id !== id))

    }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}