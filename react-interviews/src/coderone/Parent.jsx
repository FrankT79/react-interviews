import React from 'react'
import Child from './Child'

function Parent() {

    const[data, setData] = React.useState("");

    const handleChange = (data) =>{
        setData(data);
    }

  return (
    <>
    <h1>This is rendered by the parent:</h1>
    <h3>{data}</h3>
    <Child data = {data} handleChange ={handleChange}></Child>
    </>
  )
}

export default Parent