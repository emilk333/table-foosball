
import React, { useState } from 'react'


export const TextInput = (props) => {
    const { label, callback, type, placeholder } = props
    const [value, setvalue] = useState("")

    const handleInput = (newValue) => {
        setvalue(() => newValue)
        callback(newValue, type)
    }

    return (
        <div>
           <label htmlFor={label}>{label}</label>
           <input placeholder={placeholder} onInput={(e) => handleInput(e.target.value)} type="text" id={label} name={label} value={value}/>
        </div>
    )
}