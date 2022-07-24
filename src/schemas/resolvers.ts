import { getCharacters, getCharacter } from '../service/character.service'

export const resolvers = {
    Query: {
        characters(parent: any, args: any) {
            return getCharacters(args.filter, args.limit)
        },
        character(parent: any, args: any) {
            return getCharacter(args.id)
        }
    },
}