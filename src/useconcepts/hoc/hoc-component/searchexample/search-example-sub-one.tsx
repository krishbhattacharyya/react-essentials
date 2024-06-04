import {memo} from 'react';
import {ToDoDataType} from "./with-search-example";


export default memo(function SearchExampleOne(props:any){
    const { data } = props;
    return(
        <>
        <div>Todos</div>
        {data?.map((item:ToDoDataType)=><li key={item.id}>{item.title}</li>)}
        </>
    )
});
