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

// const getProjectSitemap = 

const getProjectBySlug = `query Projects($filters: ProjectFiltersInput) {
  projects(filters: $filters) {
    data {
      id
      attributes {
        website
        updatedAt
        slug
        title
        publishedAt
        github
        description
        createdAt
        content
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`

const getProjectSlugs = `query Projects($pagination: PaginationArg) {
  projects(pagination: $pagination) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}`

const getProjects = `query Projects($pagination: PaginationArg) {
  projects(pagination: $pagination) {
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
                hash
                ext
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

const getPostSlugs = `query Data($pagination: PaginationArg) {
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
                hash
                ext
              }
            }
          }
        }
        id
      }
    }
  }`

export { getPosts, getPostSlugs, getPostBySlug, getPostsSitemap, getProjects, getProjectSlugs, getProjectBySlug }