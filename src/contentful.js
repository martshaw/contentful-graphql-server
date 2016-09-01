import contentful from 'contentful';
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'no6cjxhb9usq',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'f2da7e3bcbb03abbd2674a64b81e858b79a0ecb4e67d78d501ffaa215773d75e',
});

export async function getAllByType(contentType) {
    try {
        const response = await client.getEntries({
            content_type: contentType,
        });
        return response;
    } catch(err) {
        console.log('cmsApi getAllByType failed', err);
    }
}
