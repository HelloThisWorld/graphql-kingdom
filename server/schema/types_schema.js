const grahpql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull
} = grahpql;

// Scalar Type
const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Represents a Person Type',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        isMarried: { type: new GraphQLNonNull(GraphQLBoolean) },
        gpa: { type: new GraphQLNonNull(GraphQLFloat) },

        justAType: {
            type: Person,
            resolve(parent, args) {
                return parent;
            }
        }
    })
});

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        person: {
            type: Person,
            resolve(parent, args) {
                let personObj = {
                    name: 'Antonio',
                    age: 35,
                    isMarried: true,
                    gpa: 4.0
                };
                return personObj;
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
});