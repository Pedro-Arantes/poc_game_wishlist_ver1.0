import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { GameEntity, GameInsert, GamePut } from "../protocols/Game.js";


export async function selectGames(): Promise<QueryResult<GameEntity>> {
    return connection.query('SELECT * FROM games ',);
}
export async function selectFilterGames(platform: string): Promise<QueryResult<GameEntity>> {
    return connection.query(`SELECT * FROM games  WHERE platform ILIKE  $1`, [platform + '%']);
}

export async function insertGames(game: GameInsert): Promise<void> {
    const { name, platform, genre } = game
    connection.query('INSERT INTO games(name,platform,genre)  VALUES($1,$2,$3)', [name, platform, genre]);
}
export async function updateGame(game: GamePut, id: number): Promise<void> {
    const { status, grade } = game
    connection.query('UPDATE games SET  status=$1,grade=$2  WHERE id=$3', [status, grade, id]);
}
export async function deleteGame(id: number): Promise<void> {
    connection.query('DELETE FROM games  WHERE id=$1', [id]);
}
export async function selectVeryGames(name: string): Promise<QueryResult<GameEntity>> {
    return connection.query('SELECT * FROM games WHERE name=$1 ', [name]);
}