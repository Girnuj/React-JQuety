import React, { useEffect } from 'react';
import './Card.css';
import { FaInfoCircle, FaRegTimesCircle, FaChevronCircleLeft } from "react-icons/fa";
import $ from 'jquery'



export default function Card ({min,weather,latitud,clouds, wind, max, name, img, onClose, id, temp, longitud, feels_like,humidity,pressure}) {
 
  
      useEffect(()=>{
        $(document).ready(function(){
          $('.more').click(function (){
              $('.back').addClass('active')
              $('.front').removeClass('active')
          })
          $('.go-back').click(function (){
              $('.back').removeClass('active')
              $('.front').addClass('active')
          })
      })
      })

    //  const handleChanges = () => {
    //     e.preventDefatult;
        

    //   }
    return (
      


      <div className="card">
        <div className='front active'>
          <div className='location'>{name}</div>
          <div className='close' onClick={onClose}>< FaRegTimesCircle /> </div>
          <div className='more'>< FaInfoCircle /></div>
          <div className='weather'>
          <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width='70%' height='70%' alt="" />
                    <h1>{temp}°</h1>
                    <h1><span>Today</span></h1>
         </div>

          
                <ul className='forecast'>
                    <li>
                        <div className='day'>Min</div>
                        <div className='temprature'>{min}°</div>
                    </li> 
                    <li>
                        <div className='day'>Max</div>
                        <div className='temprature'>{max}°</div>
                    </li> 
                 </ul>
            
        
        </div>
        <div className='back'>
               
              <div className='go-back'><FaChevronCircleLeft /></div>
               <ul className='forecast2'>
                   <li>
                        <div className='day'>Wind</div>
                        <div className='wind'>{wind} km/h</div>
                    </li> 
                    <li>
                        <div className='day'>Weather</div>
                        <div className='temprature'>{weather}</div>
                    </li> 
                    <li>
                        <div className='day'>Clouds</div>
                        <div className='temprature'>{clouds}°</div>
                    </li> 
                    <li>
                        <div className='day'>Latitud</div>
                        <div className='temprature'>{latitud}°</div>
                    </li> 
                    <li>
                        <div className='day'>Longitud</div>
                        <div className='temprature'>{longitud}°</div>
                    </li> 


                </ul>
                  
             </div>

      </div>
    );
};
