const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            date(locale: "ja", fromNow: true)
            id
            slug
            title
            tags
            description {
              childMarkdownRemark {
                html
              }
              description
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  result.data.allContentfulBlogPost.nodes.forEach((node, index) => {
    // const previous = node.length ===  ? index : null
    // const next = index === 0 ? null : `${node.slug}_${index - 1}`

    createPage({
      path: `${node.slug}_${index + 1}`,
      component: blogPostTemplate,
      context: {
        slug: `${node.slug}_${index + 1}`,
        node: node,
        // previous,
        // next,
      },
    })
  })
}
