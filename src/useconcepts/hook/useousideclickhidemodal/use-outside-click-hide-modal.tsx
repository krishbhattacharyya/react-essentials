import {useState, useEffect, forwardRef} from 'react';

export default function useOutsideClickHideModal(initialvalue:boolean, ref:any){
        const [showModal, setShowModal] = useState(initialvalue);

        function clickOutSide(e:MouseEvent){
                if(ref.current && ref.current.contains(e.target)){
                        setShowModal(false)  
                }
        }

        useEffect(()=>{
                document.addEventListener('click', clickOutSide)
                return ()=>{
                        document.removeEventListener('click', clickOutSide)      
                }
        },[ref])
        return [showModal, setShowModal] as const
}