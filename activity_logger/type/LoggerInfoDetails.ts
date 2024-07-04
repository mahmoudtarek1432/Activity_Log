export interface LoggerInfoDetails {
    actorData: Actor,
    actionData: Action
    date: string
    id: string
}

export interface Actor {
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