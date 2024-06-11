import {useState, useEffect} from 'react';

function getLocalStorageValue(key:string, initialvalue:any){
    const savedValue = localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)||''):'';
    if(savedValue){
        return savedValue;
    }
    //if(initialvalue instanceof Function) return initialvalue();
    return initialvalue;
}

export default function useLocalStorage(key:string, initialvalue:string){
    const [value, setValue] = useState(()=>getLocalStorageValue(key, initialvalue));
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])
    return [value, setValue] as const;
}