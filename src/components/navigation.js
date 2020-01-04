/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationData {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
          author
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { menuLinks } = data.site.siteMetadata
  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
      }}
    >
      <nav>
        <ul style={{ display: "flex", flex: 0.5 }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                paddingRight: `0.75rem`,
              }}
            >
              <Link
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
