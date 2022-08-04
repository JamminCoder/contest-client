import { isAuthorized } from "../auth";

export default function IfNotAuth(props) {
    let content;
    !isAuthorized() ? content = props.children: content = "";

    return content;
}