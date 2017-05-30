import React from 'react'



export default function ListItem(props) {
    const handleInputChanges = (e, index) => {
        console.log(index) 
        /**
         * Call function for every case
         * lastItem check
         * edit item
         * delete item
         */
    }

    return (
        <p>
            <span>{props.index + 1}.</span>
            <input value={props.value} onChange={(e) => handleInputChanges(e,props.index)}/>
        </p>
    )
}


