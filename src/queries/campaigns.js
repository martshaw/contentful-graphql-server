import {GraphQLList} from 'graphql';
import campaignType from '../types/campaign'
import {getAllByType} from '../contentful';

const CONTENT_TYPE = 'campaign';

export default {
    type: new GraphQLList(campaignType),
    resolve: async() => {
        const response = await getAllByType(CONTENT_TYPE);

        const campaigns = response.items.map(campaign => {
            const {fields} = campaign;
            const {bannerImage} = fields;

            return {
                id: campaign.sys.id,
                name: fields.name,
                banner: {
                    heading: fields.bannerHeading,
                    description: fields.bannerDescription,
                    imageUrl: bannerImage.fields.file.url,
                    termsLabel: fields.bannerTermsLink,
                },
                terms: fields.terms,
            };
        });

        return campaigns;
    }
}
