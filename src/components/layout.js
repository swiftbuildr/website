import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Navigation from "../components/navigation"

class Layout extends React.Component {
  
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.0),
            marginBottom: rhythm(0.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
          <Navigation />
        </header>
        <main style={{marginBottom: rhythm(3.5)}}>{children}</main>
        <footer>
          © {title} ltd {new Date().getFullYear()}, Powered by
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export const pageQuery = graphql`
query TitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`


export default Layout
