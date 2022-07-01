import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
            temp={c.temp}
            weather={c.weather}
            wind={c.wind}
            latitud={c.latitud}
            longitud={c.longitud}
            clouds={c.clouds}
            feels_like= {c.feels_like}
            humidity= {c.humidity}
            pressure= {c.pressure}

          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
