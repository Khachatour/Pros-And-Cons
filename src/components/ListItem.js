import React from 'react'



export default function ListItem(props) {
    const handleInputChanges = (e, index) => {
        console.log(index) 
    }

    return (
        <p>
            <span>{props.index + 1}.</span>
            <input value={props.value} onChange={(e) => handleInputChanges(e,props.index)}/>
        </p>
    )
}


