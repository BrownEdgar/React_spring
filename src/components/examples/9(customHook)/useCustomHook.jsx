import React, { useState } from 'react'

export default function useCustomHook({initialState, min, max}) {
    const [value, setValue] = useState(initialState)
    const plus = () => setValue(value < max ? value + 1 : max) 
    const minus = () => setValue(value >min ? value -1 : min) 
    return [value, {plus, minus}]
    
}
