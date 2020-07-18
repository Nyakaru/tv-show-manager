//@ts-check
import { gql } from 'apollo-boost'
import { readFileSync } from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { applyMiddleware } from 'graphql-middleware'
import { join } from 'path'
import resolvers from '../resolvers'

const schemas = readFileSync(join(__dirname, '..', '..', 'graphql', 'schema.graphql'), 'utf-8')

const typeDefs = gql`
    ${schemas}
`
const interceptResolvers = () => {
    // TO-DO

    // implement a way to intercept mutations and resolvers to intermittently catch errors in all asynchronous functions
    // that would otherwise result to no response, or cause the node.js process to exit

    try {
        return resolvers
    } catch (error) {
        console.log(error)
    }
}

export const schema = applyMiddleware(
    makeExecutableSchema({
        typeDefs,
        resolvers: interceptResolvers(),
    }),
)
