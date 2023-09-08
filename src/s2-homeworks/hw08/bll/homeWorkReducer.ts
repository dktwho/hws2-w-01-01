import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state.sort((a: UserType, b: UserType) => b.name.toUpperCase() > a.name.toUpperCase() ? -1 : 1)]
                : [...state.sort((a: UserType, b: UserType) => a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1)]
        }
        case 'check': {
            return state.filter((user) => user.age >= action.payload).reverse()
        }
        default:
            return state
    }
}
