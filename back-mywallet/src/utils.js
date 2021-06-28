import connection from "./connectDb.js";

export function isValidEmail(email){
    const emailStr = String(email).trim();
    if(emailStr.includes(" ")){
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailStr);
}
export function validEmail(validE){
    return String(validE).trim();
}

export async function isValidId(id){
    try{
        const element = await connection.query('SELECT * FROM users WHERE id=$1', [id]);
        if(element.rows.length <= 0){
            return false;
        }
        return true;
    } catch{
        return false;
    }
}

export async function isDuplicatedEmail(email){
    try{
        const user = await connection.query('SELECT email FROM users WHERE email=$1', [email]);
        if(user.rows.length > 0){
            return true;
        }
        return false;
    } catch{
        return true;
    }
}