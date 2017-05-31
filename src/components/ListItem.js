import React from 'react'



export default function ListItem({ value, index, deleteItem, editItem }) {

    const handleInputChanges = (e, index) => editItem(e.target.value, index)

    return (
        <p>
            <span>{index + 1}.</span>
            <input value={value} onChange={(e) => handleInputChanges(e, index)} />
        </p>
    )
}


