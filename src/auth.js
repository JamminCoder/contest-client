export function isAuthorized() {
    if (localStorage.getItem("jwt")) return true;
    
    return false;
}

export function authHeader() {
    return { Authorization: `Bearer ${localStorage.getItem("jwt")}` };
}