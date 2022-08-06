import { GET_USER_URL } from "./apiConfig";

const axios = require("axios").default;

export function isAuthorized() {
    if (localStorage.getItem("jwt")) return true;
    
    return false;
}

export function userIsContestManager(managerName) {
    if (localStorage.getItem("username") === managerName) return true;
    return false;
}

export async function getVerifiedUsername(callback) {
    const res = await axios.get(GET_USER_URL, { headers: {...authHeader()} });
    const username = res.data;
    callback(username);
}

export function authHeader() {
    return { Authorization: `Bearer ${localStorage.getItem("jwt")}` };
}