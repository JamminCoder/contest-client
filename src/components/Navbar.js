import { Link } from 'react-router-dom';
import { isAuthorized } from '../auth';
import IfAuth from "./IfAuth";
import IfNotAuth from "./IfNotAuth";
import Logout from './Logout';

export default function Navbar(props) {

    return (
        <nav className="p-6 mb-6 flex gap-3 shadow-md">
            <Link to='/'>Home</Link>
            <IfAuth>
                <Logout to='/' key="/"/>
                <Link to='/contests/new' key="/contest">New Contest</Link>
            </IfAuth>

            <IfNotAuth>
                <Link to='/login' key="/login">Login</Link>
                <Link to='/register' key="/register">Register</Link>
            </IfNotAuth>
        </nav>
    );
}