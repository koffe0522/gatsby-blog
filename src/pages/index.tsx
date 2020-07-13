import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query BlogPost {
      site {
        siteMetadata {
          title
        }
      }
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
          }
        }
      }
    }
  `)

  return (
    <Layout location={"/"} title={data.site.siteMetadata.title}>
      <SEO title="All posts" />
      {
        data.allContentfulBlogPost.nodes.map((node, index) => {
          const title = node.title || node.slug
          return (
            <article className="media" key={node.slug}>
              <div className="media-content">
                <div className="content">
                  <h3 className="title">
                    <Link style={{ boxShadow: `none` }} to={`${node.slug}/${index + 1}`}>
                      {title}
                    </Link>
                  </h3>
                  <p>
                    <small>{node.date}</small>
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.description.html,
                    }}
                  />
                </div>
              </div>
            </article>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
