import React, { useState } from 'react'

export default function useArray(initialState) {
    const [arr, setArr] = useState(initialState)

    const update = (index, num) => { setArr(arr.toSpliced(index, 1, num))};
    const push = (num) => {setArr([...arr, num])}
    const remove = (index) => { setArr(arr.toSpliced(index, 1))};
    const filter = () => { setArr(arr.filter(num => num < 4))};
    const clear = () => { setArr([])}
    const set = (num1, num2) => {setArr(arr.toSpliced(0, arr.length, num1, num2))}

    return {arr,update, remove, filter, push, clear, set} 
}
