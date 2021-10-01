import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <span>
                <Link to="/">ShortNer</Link>
            </span>
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
