import {WithSimpleHOCProps} from './with-simple-example'
export default function SimpleExampleOne({handleIncreament, numCount}:WithSimpleHOCProps){
    return(
        <>
            Number of click sub one- {numCount}
            <div onMouseOver={handleIncreament}>Simple example one Mouse Over me</div>
        </>
    )
}