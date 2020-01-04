import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const Clients = () => {
  return (
    // <Layout bodyClass="page-testimonials">
    /* <SEO title="Testimonials" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Testimonals</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-title">{edge.node.frontmatter.title}</h2>
                  <p className="testimonials-name">{edge.node.frontmatter.name}</p>
                  <p className="testimonials-jobtitle">{edge.node.frontmatter.jobtitle}</p>
                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div> */
    // </Layout>
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
      }}
    >
      <ul style={{ display: "flex", flex: 0.5 }}>
      <li
          key='HSBC'
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
            to=""
          >
            HSBC
          </Link>
        </li>
        <li
          key='John Lewis'
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
            to=""
          >
            John Lewis
          </Link>
        </li>
        <li
          key='Trinity Mirror'
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
            to=""
          >
            TrinityMirror
          </Link>
        </li>
        <li
          key='Betfair'
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
            to=""
          >
            Betfair
          </Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Clients
