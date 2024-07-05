import {  useState, useContext, useEffect } from 'react'
import { CounterContext } from '../countercontext/counter-context'

export default function CounterConsumer({name}:{name:string}){
    const [count, setCount] = useState(0)
    const {addCountToContext} = useContext(CounterContext)

    useEffect(()=>{
        addCountToContext(count, name)
    },[count])

    function handleClick(){
        setCount(count=>count+1)
    }
    return(
        <>
        Count: {count}
        <br />
        <button onClick={handleClick}>Increament</button>
        </>
    )
}