import{NavLink, Outlet} from 'react-router-dom'
import classes from './navigation.module.css'
export default function Navigation(){
    return(
        <>
        <div className={classes.sidebar}>
            <ul>
                <li>
                    <NavLink to={"./"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"./customhooks"}>Hooks</NavLink>
                </li>
                <li>
                    <NavLink  to={"./hocs"}>Hocs</NavLink>
                </li>
                <li>
                    <NavLink to={"./portal"}>Portals</NavLink>
                </li>
                <li>
                    <NavLink to={"./smartsearch"}>React smart search</NavLink>
                </li>
            </ul>
        </div>
        <div className={classes.content}>
            <Outlet />
        </div>
        </>
    )
}