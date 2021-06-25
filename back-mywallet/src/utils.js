export function isValidEmail(email){
    const emailStr = String(email).toLowerCase.trim();
    if(emailStr.includes(" ")){
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailStr);
}
export function validEmail(validE){
    return String(validE).toLowerCase.trim();
}