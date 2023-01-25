export type GameEntity = {
    id: number,
    name: string,
    platform: string,
    genre: string,
    status: boolean,
    grade: number
}

export type Game = Omit<GameEntity,'id'>

export type GameInsert = Omit<GameEntity,'id'|'status'|'grade'>

export type GamePut= Omit<GameEntity,'id'|'name'|'platform'|'genre'>