import React from 'react'
import {createPortal} from 'react-dom';

function RenderOutsideTree() {

    const styles = {
        backgroundColor: "red",
        marginTop: "50px"
    }

    const box = {
        backgroundColor: "yellow"
    }
  return (
    <div style={box}>
        <p>This is the FIRST paragraph</p>
        {createPortal(<p style={styles}>This is the SECOND paragraph</p>, document.getElementById("modal"))}
        
        <p>This is the LAST paragraph</p>
    </div>
  )
}

export default RenderOutsideTree