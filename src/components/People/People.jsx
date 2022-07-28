import React, {useEffect, useState} from 'react'
import axios from 'axios';


function People() {
    const [people, setPeople]= useState([]);

useEffect (() => {
    axios.get('https://swapi.dev/api/people')
    .then ((resp)=>{
        setPeople(resp.data.results)
    })
},
    [people])


  return (
    <div>
        <h1>PEOPLE LIST</h1>
        <>
        {people.map((item)=> {
          return <p key={item.name}>{item.name}</p>
    
        
          
        })
      }

</>
        

    </div>
  )
}

export default People