import React from 'react'

function Props(props) {
  return (
    <>
    <h1>Props</h1>
    <h2> Hello {props.name}</h2>
    <h2>{props.rollnumber}</h2>
    <h2>{props.course}</h2>
    
    </>
   
  )
}

export default Props