import React, { useEffect } from 'react'
import { useState } from 'react';

function UseEffect() {
    const [timer,setTimer]=useState(0)

    const cb=()=>{
        setTimer(timer=>timer+1)
    }
    useEffect(()=>{
      setTimeout(cb,1000);  
    });
    
    //fetch data
    const[apiData, seApiData]=useState([]);
    useEffect(()=>{
        fetch('https:jsonplaceholder.typicode.com/posts/1')
        .then(response=>response.json))
        .then(apiData=>seApiData)
    })
    
  return (
    <div>
        <h1>Counter {timer}</h1>
    </div>
  )
}

export default UseEffect