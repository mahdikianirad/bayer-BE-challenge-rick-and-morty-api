import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs } from './schemas/typesDefs'
import { resolvers } from './schemas/resolvers'

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: process.env.PORT }, () => {
    console.log(process.env.banner);
    console.log(`To find you Rick and Morty characters please go to http://localhost:${process.env.PORT}/graphql`);
  })
})

