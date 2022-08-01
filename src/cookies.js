const axios = require('axios').default;

// getCookie and deleteCookie functions from https://stackoverflow.com/a/2144404
export function getCookie(name){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

export function deleteCookie( name, path, domain ) {
    if(getCookie(name)) {
      document.cookie = name + "=" +
        ((path) ? ";path=" + path: "") +
        ((domain) ? ";domain=" + domain: "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }

export default function setCookie(name, value, days) {
    let date = new Date();
    let expires;

    if (days) {
        date.setDate(date.getDate() + days);
        expires = `Expires=${ date.toUTCString() };`
    }
    
    document.cookie = `${name}=${ value }; ${ expires || "" } SameSite=None; Secure;`;
}

export function isLoggedIn() {
    if (getCookie("jwt")) return true;

    return false;
}