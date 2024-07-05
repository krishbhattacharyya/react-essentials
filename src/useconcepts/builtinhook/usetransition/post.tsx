
function getPost(){
    const item = 20000;
    const myArray = [];
    for(let i=0; i<item; i++){
        myArray.push(i)
    }
    return myArray;
}


export default function Post(){
    const data = getPost()

    return(
        <>
        <h4>Post tab items</h4>
        {data?.map((item:number)=><li key={item}>Item No {item}</li>)}
        </>
    )
}