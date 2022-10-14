
import React from 'react'


export const TextInput = () => {
    return (
        <div>
           <label htmlFor="name">Name (4 to 8 characters):</label>
           <input type="text" id="name" name="name"/>
        </div>
    )
}