const Koa = require('koa')
const {ApolloServer} = require('apollo-server-koa')
const {makeExecutableSchema} = require('graphql-tools')
const {resolvers, typeDefs} = require('.')
const PORT = 4000

const server = new ApolloServer({
    schema: makeExecutableSchema({typeDefs, resolvers})
})



const app = new Koa()
server.applyMiddleware({app})

app.listen({ port: PORT }, () => {
    console.log(` server ready @ port =>: ${PORT + server.graphqlPath}`)
})
