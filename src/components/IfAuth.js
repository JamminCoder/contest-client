import { isAuthorized } from "../auth";

export default function IfAuth(props) {
    let content;
    isAuthorized() ? content = props.children: content = "";

    return content;
}