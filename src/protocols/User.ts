export type UserEntity = {
    id: number ,
    name: string,
    email: string,
    password: string,
    cpf: string
}

export type UserPartial = Partial<UserEntity> | Omit<UserEntity,'id'>

export type User = Omit<UserEntity,'id'>

export type UserLogin = Omit<UserEntity,'id'|'name'|'cpf'>