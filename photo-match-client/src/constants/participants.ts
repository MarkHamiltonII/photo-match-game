import type { Participant } from "../types"

const players: string[] = [
    "JoJo",
    "Mark",
    "Kennedy",
    "Sylvie",
    "Mike",
    "Pearl",
    "Rose",
    "Nick",
    "Amanda",
    "JT",
    "David",
    "Natalie",
    "CJ",
    "Madison",
    "Elliot",
    "Emmit",
    "Jennifer",
    "Andrew",
    "Lucas",
    "Cassie",
    "Tasha",
    "Jordan",
    "SK",
    "Lauren",
    "Jackie",
    "Gerret"
]

export const startingPlayers = players.map<Participant>(player => ({ name: player, selected: true }))