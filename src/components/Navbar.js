import { Link } from 'react-router-dom';
import { isAuthorized } from '../auth';
import Logout from './Logout';

export default function Navbar(props) {

    return (
        <nav className="p-6 flex gap-3 shadow-md">
            <Link to='/'>Home</Link>
            {!isAuthorized() ? <Link to='/register'>Register</Link>: ""}
            {isAuthorized() ? <Logout to='/'/>: <Link to='/login'>Login</Link>}
        </nav>
    );
}