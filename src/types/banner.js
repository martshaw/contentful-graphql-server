import {GraphQLObjectType, GraphQLString} from 'graphql';

const BannerType = new GraphQLObjectType({
    name: 'banner',
    fields: () => {
        return {
            heading: {
                type: GraphQLString,
            },
            description: {
                type: GraphQLString,
            },
            imageUrl: {
                type: GraphQLString,
            },
            termsLabel: {
                type: GraphQLString,
            },
        };
    },
});

export default BannerType;