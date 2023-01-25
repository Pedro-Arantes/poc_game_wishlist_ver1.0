import { selectTokenSession } from "../repository/sessionsRepository.js"


export async function haveToken(token:string){

        const result = await selectTokenSession(token)
        //console.log(result)
        if (!result) {
            throw "Token_Not_Valid";   
        }
        return result 
}