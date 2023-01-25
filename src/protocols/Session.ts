export type SessionEntity = {
    id: number ,
    user_id: number,
    token: string
}

export type Session = Omit<SessionEntity,'id'>

export type SessionPartial = Partial<SessionEntity> | Omit<SessionEntity,'id'>