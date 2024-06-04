import React,{useState} from 'react';
export interface WithSimpleHOCProps {
    numCount: string;
    handleIncreament:()=>void;
}
export default function withSimpleHOCExample<T extends WithSimpleHOCProps = WithSimpleHOCProps>(WrappedComponent:React.ComponentType<T>){
    return(function NewComponent(props: Omit<T, keyof WithSimpleHOCProps>){
        const [numCount, setNumCount] = useState<string>('0');
        function handleIncreament(){
            setNumCount(prevState=>(parseInt(prevState)+1).toString())
        }
        return (<>
            <h4>Simple Example of HOC 1</h4>
            <WrappedComponent {...(props as T)} numCount={numCount} handleIncreament={handleIncreament}  />
        </>)
    })
}