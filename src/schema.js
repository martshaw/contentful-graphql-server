import * as graphql from 'graphql';;
import campaigns from './queries/campaigns';

const query = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            campaigns,
        }
    }
});

const schema = new graphql.GraphQLSchema({
    query,
});

export default schema;

