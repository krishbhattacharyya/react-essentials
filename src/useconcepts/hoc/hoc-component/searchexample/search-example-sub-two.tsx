import {memo} from 'react';
import { ToDoDataType} from "./with-search-example";


export default memo(function SearchExampleTwo(props:any){
    const { data } = props;
    return(
        <>
        <div>Users</div>
        {data?.map((item:ToDoDataType)=><li key={item.id}>{item.name}</li>)}
        </>
    )
});
