import { GraphQLClient } from 'graphql-request'

const endpoint =
  'https://api-sa-east-1.hygraph.com/v2/clm2ljiyp1v0a01ugcw5gcp4w/master'

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
