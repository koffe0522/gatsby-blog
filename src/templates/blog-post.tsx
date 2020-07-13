import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ location, pageContext }) => {
  const { previous, next, node } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={node.title}
        description={node.description.description}
      />
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h1>{node.title.title}</h1>
            <p>{node.date}</p>
            <p dangerouslySetInnerHTML={{ __html: node.description.childMarkdownRemark.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
          </div>
        </div>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {/* {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )} */}
          </li>
          <li>
            {/* {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )} */}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate
