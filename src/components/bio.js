/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedIn
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        I am <strong>{author.name}</strong>, {author.summary}<br /><br />
        Find me online
        {` `}
        <span
          style={{
            backgroundColor: `#C5E1A5`,
            padding: `0.4em 0.25em 0.25em`,
            borderRadius: `0.25em`
          }}
        >
          <a href={`http://stivaros.com/`} style={{margin: `0 0.25em`}} aria-label="Home">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href={`https://twitter.com/${social.twitter}`} style={{margin: `0 0.25em`}} aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={`https://linkedin.com/in/${social.linkedIn}`} style={{margin: `0 0.25em`}} aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </span>
      </p>
    </div>
  )
}

export default Bio
