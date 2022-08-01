import { Link } from 'react-router-dom';

export default function Logout(props) {
    return (
        <Link to={ props.to || "/logout" }
            onClick={props.onClick || function(e) {
                e.preventDefault();
                localStorage.removeItem("jwt");
                window.location.reload();
            }}
        >
            {props.children || "Logout"}</Link>
    );
}