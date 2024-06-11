import {useState} from 'react';

export default function useDebounce(){
    const [val, setVal] = useState<string>('');

    //To debounceWrapperFunc a function, we'll have a separate function that accepts the function 
    //reference and the delay as parameters, and returns a debounced function.
    function debounceWrapperFunc(callbackFunc: (s: string) => void, delay = 1000) {
        let timeout:any = null;
        // a closure to hold access to timeout every time we use the debounced function have access to timeout
        // This function will only be called once to return a debounced function and that, in turn, will be used in the subsequent code.
        return (...args:[string]) => {
        if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                callbackFunc(...args);
            }, delay);
        };
    }

    const debounceFunc = debounceWrapperFunc(function(text) {
        setVal(text)
    }, 1000);
    
    function setValue(str:string){
        debounceFunc(str)
    }

    return {val, setValue} as const; 
}