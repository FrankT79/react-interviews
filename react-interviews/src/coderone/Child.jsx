import React from 'react'

function Child(props) {

  return (
    <>
    <h1>This is rendered by the Child:</h1>
    <input type="text" value={props.data} onChange={(e)=> props.handleChange(e.target.value)}/>
    </>
  )
}

export default Child