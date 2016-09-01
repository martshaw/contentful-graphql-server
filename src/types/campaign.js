import {GraphQLObjectType, GraphQLString} from 'graphql';
import bannerType from './banner';

const CampaignType = new GraphQLObjectType({
    name: 'campaign',
    fields: () => {
        return {
            id: {
                type: GraphQLString,
            },
            name: {
                type: GraphQLString,
            },
            terms: {
                type: GraphQLString,
            },
            banner: {
                type: bannerType,
            },
        };
    }
});

export default CampaignType;