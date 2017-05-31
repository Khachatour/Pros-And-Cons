import React from 'react'



export default function ListItem({ valueArr, index, lastItemHandle, deleteItem, editItem }) {


    const handleInputChanges = (e, index) => {

        const isLastItem = (arr, index) => (index === (arr.length - 1))

        if (isLastItem(valueArr, index)) return lastItemHandle(e.target.value, index)

        if (!e.target.value) return deleteItem(index)

        editItem(e.target.value, index)

    }

    return (
        <p>
            <span>{index + 1}.</span>
            <input value={valueArr[index]} onChange={(e) => handleInputChanges(e, index)} />
        </p>
    )
}


