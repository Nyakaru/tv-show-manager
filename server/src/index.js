// @ts-check
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import http from 'http'
import { prisma } from '../prisma/generated/prisma-client'
import { schema } from "./schema"

const app = express()
const PORT = 4000


const server = new ApolloServer({
    schema,
    context: request => {
      return {
        ...request,
        prisma,
      }
    }
})

server.graphqlPath = '/graphql'

server.applyMiddleware({ app })

const httpServer = http.createServer(app)

httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
})
