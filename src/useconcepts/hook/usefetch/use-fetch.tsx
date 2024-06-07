import {useState, useEffect, useCallback} from 'react';

export default function useFetch(url:string){
    const [ data , setData ] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|null>(null);

    function handleFetch(){
        fetchData(url);
    }

    const fetchData = useCallback(async (url:string)=>{
        setLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data.slice(0,5));
        } catch(err){
            setError('something went wrong');
        } finally {
            setLoading(false);
        }
    },[])

    useEffect(()=>{
        fetchData(url)
    },[url, fetchData]);

    return {loading, data, error, handleFetch} as const
}