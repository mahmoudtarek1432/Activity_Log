export interface LoggerInfoDetails {
    actorData: User,
    targetData: User,
    actionData: Action
    date: string
    id: string
}

export interface User {
    name: string,
    email: string,
    address: string,
    id: string
}

export interface Action {
    name: string,
    object: string,
    id: string
}