import { characters } from "../data/data"
import { CharactersFilter } from "../model/charactersFilter"

const getCharacters = (filter: CharactersFilter, limit: number = 20) => {
    if (filter?.name) {
        const _characters = characters.filter(character => character?.name?.toLocaleLowerCase().includes(filter?.name?.toLocaleLowerCase()))
        return _characters.length < limit ? _characters : _characters.slice(0, limit)
    } else {
        return getAllCharacters(limit)
    }
}

const getCharacter = (id: string) => {
    return characters.find(c => c.id === id)
}

const getAllCharacters = (limit: number = 20) => {
    return characters.length < limit ? characters : characters.slice(0, limit)
}

export {
    getCharacters,
    getCharacter
}