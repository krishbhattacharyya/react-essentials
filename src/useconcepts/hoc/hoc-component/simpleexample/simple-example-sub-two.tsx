import {WithSimpleHOCProps} from './with-simple-example';

export default function SimpleExampleTwo({handleIncreament, numCount}:WithSimpleHOCProps){
    return(
        <>
            Number of click sub two- {numCount}
            <div onClick={handleIncreament}>Simple example two click me</div>
        </>
    )
}