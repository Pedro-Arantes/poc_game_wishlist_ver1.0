import prisma from "../database/db.js";
import { User, UserEntity, UserLogin } from "../protocols/User.js";

export async function selectUsers(): Promise<UserEntity[]>{
    return prisma.users.findMany();
}

export async function selectLoginUser(user:UserLogin): Promise<UserEntity>{
    return prisma.users.findFirst({
        where:{
            email: user.email,
            password: user.password
        }
    })
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