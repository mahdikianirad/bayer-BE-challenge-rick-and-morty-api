import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    status: String
    species: String
    type: String
    gender: String
    image: String
  }

  type Query {
    character(id: ID!): Character!,
    characters(filter: CharactersFilter!, limit: Int = 20): [Character!]!,
  }

  input CharactersFilter {
    name: String
  }
`