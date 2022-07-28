import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Planets() {
    const [planets , setPlanets] = useState([]);
    
useEffect (() => {
    axios.get('https://swapi.dev/api/planets')
    .then ((resp)=>{
        setPlanets(resp.data.results)
      })
    }
,[planets])

  return (
    <div>
        <h1>PLANETS LIST</h1>
     {
        planets.map((item)=> {
          return <p key={item.name}>{item.name}</p>
        })
      }
    </div>
  )
}

export default Planets