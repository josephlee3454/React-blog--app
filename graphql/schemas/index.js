const postsSchema = require('./posts/mocks')

const resolvers = [
    postsSchema.resolvers
]

const typeDefs = [
    postsSchema.schema
]

module.exports = {
    resolvers,
    typeDefs
}