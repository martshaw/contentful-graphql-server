# Contentful + GraphQL server proof of concept

This is only listing the 'campaign' content type defined in contentful.

`npm start` to start the server
`npm run dev` to run with nodemon

## Example
Run `npm start` and go to `http://localhost:3000/graphql` to write your query e.g

```
{
  campaigns {
    id
    name
    terms
    banner {
      heading
      description
      imageUrl
    }
  }
}

```