import prisma from "../database/db.js";
import { Session, SessionEntity } from "../protocols/Session.js";

export async function selectSessions(): Promise<SessionEntity[]>{
    return prisma.sessions.findMany();
}

export async function selectTokenSession(token:string): Promise<SessionEntity>{
    console.log(token)
    return prisma.sessions.findFirst({
        where:{
            token:token
        }
    });
}

export async function insertSession(session:Session): Promise<SessionEntity>{

    return prisma.sessions.create({
        data:session
    })
}