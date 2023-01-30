import { Decimal } from "@prisma/client/runtime"

export type GameEntity = {
    id: number,
    name: string,
    platform: string,
    genre: string,
    status: boolean,
    grade: Decimal,
    evaluator_id?: number 
}

export type Game = Omit<GameEntity,'id' | 'evaluator_id'>

export type GamePartial = Partial<GameEntity> | Omit<GameEntity,'id'>

export type GameInsert = Omit<GameEntity,'id'|'status'|'grade'>

export type GamePut= Omit<GameEntity,'id'|'name'|'platform'|'genre'>
