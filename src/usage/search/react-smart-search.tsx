import SearchComponent from "../../useconcepts/search/serach-component"
import classes from "./react-smart-search.module.css";
export default function ReactSmartSearch(){
    return(
        <>
            <div className={classes.searchComponent}>
            <h3>React Smart search</h3>
            <SearchComponent />
            </div>
        </>
    )
}