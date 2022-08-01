import { Link } from 'react-router-dom';
import { isLoggedIn } from '../cookies';
import Logout from './Logout';

export default function Navbar(props) {

    return (
        <nav className="p-6 flex gap-3 shadow-md">
            <Link to='/'>Home</Link>
            {!isLoggedIn() ? <Link to='/register'>Register</Link>: ""}
            {isLoggedIn() ? <Logout to='/'/>: <Link to='/login'>Login</Link>}
        </nav>
    );
}