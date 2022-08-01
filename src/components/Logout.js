import { Link } from 'react-router-dom';
import { deleteCookie } from '../cookies';

export default function Logout(props) {
    return (
        <Link to={ props.to || "/logout" }
            onClick={props.onClick || function(e) {
                e.preventDefault();
                deleteCookie("jwt");
                window.location.reload();
            }}
        >
            {props.children || "Logout"}</Link>
    );
}