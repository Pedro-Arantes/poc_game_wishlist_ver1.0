import { User } from "../protocols/User"
import { selectEmailUser } from "../repository/usersRepository.js"


export async function haveUser(user:User){

    try {
        const result = await selectEmailUser(user.email)
        if (result.length > 0 ) {
            throw "user_already_inserted"
        }else{
            return false 
        }      
    } catch (error) {
        console.log(error)
        return true
    }
}