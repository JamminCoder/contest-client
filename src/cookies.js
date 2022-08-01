export default function setCookie(name, value, days) {
    let date = new Date();
    let expires;

    if (days) {
        date.setDate(date.getDate() + days);
        expires = `Expires=${ date.toUTCString() };`
    }
    
    document.cookie = `${name}=${ value }; ${ expires || "" } SameSite=None; Secure;`;
}