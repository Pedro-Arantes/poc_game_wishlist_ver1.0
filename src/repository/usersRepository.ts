import prisma from "../database/db.js";
import { User, UserEntity } from "../protocols/User.js";

export async function selectUsers(): Promise<UserEntity[]>{
    return prisma.users.findMany();
}

export async function insertUser(user:User):Promise<UserEntity>{
    return prisma.users.create({
        data:user
    })
}
export async function selectEmailUser(email: string) : Promise<UserEntity[]> {
    return prisma.users.findMany({
        where:{
            email:{
                startsWith: email,
            }
        }
    })
}