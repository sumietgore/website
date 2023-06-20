const headers = { 'content-type': 'application/json', 'Authorization': `Bearer ${process.env.STRAPI_TOKEN}` };

const requestBody = (query, variables) => {
  const body = { query: query, variables: variables }
  return ({
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
}

export default async function fetchApi(query, variables) {
  const response = await fetch(`${process.env.STRAPI_URL}/graphql`, requestBody(query, variables))

  return response.json()
}

const getPostsSitemap = `query Data($pagination: PaginationArg) {
  posts(pagination: $pagination) {
    data {
      id
      attributes {
        slug
        updatedAt
      }
    }
  }
}`

const getPostBySlug = `query Posts($filters: PostFiltersInput) {
    posts(filters: $filters) {
      data {
        id
        attributes {
          image {
            data {
              id
              attributes {
                url
                height
                width
                caption
              }
            }
          }
          title
          slug
          publishedAt
          updatedAt
          description
          content
        }
      }
    }
  }`

const getSlugs = `query Data($pagination: PaginationArg) {
    posts(pagination: $pagination) {
      data {
        attributes {
          slug
        }
        id
      }
    }
  }`

const getPosts = `query Data($pagination: PaginationArg) {
    posts(pagination: $pagination) {
      data {
        attributes {
          slug
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }`

export { getPosts, getSlugs, getPostBySlug, getPostsSitemap }