import { QueryResult } from "pg";
import prisma from "../database/db.js";
import { GameEntity, GamePut,Game, GamePartial } from "../protocols/Game.js";


export async function selectGames(): Promise<GameEntity[]>{
    return prisma.games.findMany();
}
export async function selectFilterGames(platform: string): Promise<GameEntity[]> {
    return prisma.games.findMany({
        where: {
            platform:{
                startsWith: platform,
                mode: 'insensitive',
            },
        },
    })
    // connection.query(`SELECT * FROM games  WHERE platform ILIKE  $1`, [platform + '%']);
}

export async function upsertGames(game:GamePartial, id?: number): Promise<GameEntity>{
    const { name, platform, genre,status,grade } = game
    //prisma.games.upsert()
    return prisma.games.upsert({
        where: {
            id: !id ? 0 : id 
        },
        create: game as Game,
        update: {
            grade:game.grade,
            status:game.status,
        },
    })
    //connection.query('INSERT INTO games(name,platform,genre)  VALUES($1,$2,$3)', [name, platform, genre]);
}
export async function updateGame(game: GamePut, id: number): Promise<void> {
    const { status, grade } = game
    //connection.query('UPDATE games SET  status=$1,grade=$2  WHERE id=$3', [status, grade, id]);
}
export async function deleteGame(id: number):Promise<GameEntity>{
   return prisma.games.delete({
    where:{
        id: id
    }
   })
   // connection.query('DELETE FROM games  WHERE id=$1', [id]);
}
export async function selectVeryGames(name: string) : Promise<GameEntity[]> {
    return prisma.games.findMany({
        where:{
            name:{
                startsWith: name,
                mode:'insensitive'
            }
        }
    })
    //connection.query('SELECT * FROM games WHERE name=$1 ', [name]);
}