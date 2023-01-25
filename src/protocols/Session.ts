export type SessionEntity = {
    id: Number ,
    user_id: Number,
    token: String
}

export type Session = Omit<SessionEntity,'id'>