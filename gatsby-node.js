const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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
      path: `${node.slug}/${index + 1}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        slug: `${node.slug}`,
        node: node,
        // previous,
        // next,
      },
    })
  })
}
