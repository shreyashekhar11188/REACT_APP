import React, { useState } from 'react'

function UseState() {
    const[color,setColor]=useState('blue');

    const mouseover=()=>{
        setColor(color=='red'?"blue":"red");
    }
    //increment, decrement or rest - exp 08
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
  return (
    <> 
    <h1> Use State Hooks</h1>
    <p style ={{color:color}} onMouseOver ={mouseover}> React hooks are special functions introduced in React 16.8 that allows you to use state and other React features(like lifecycle methods and context) inside functional components without writing a class.</p>
    <div>
        <h2>{count}</h2>
    </div>
    </>
  )
}

export default UseState