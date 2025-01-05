/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

import { rhythm } from "../utils/typography";

export const Bio = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(height: 50, layout: FIXED, width: 50)
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
  `);

  return <PureBio {...props} data={data} />;
};

export const PureBio = ({ data }) => {
  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
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
        I am <strong>{author.name}</strong>, {author.summary}
        <br />
        <br />
        Find me online
        {` `}
        <span
          style={{
            backgroundColor: `#C5E1A5`,
            padding: `0.4em 0.25em 0.25em`,
            borderRadius: `0.25em`,
          }}
          aria-label="social links"
        >
          <a
            href={`http://stivaros.com/`}
            style={{ margin: `0 0.25em` }}
            aria-label="Home"
          >
            <FontAwesomeIcon icon={faHouseChimney} />
          </a>
          <a
            href={`https://twitter.com/${social.twitter}`}
            style={{ margin: `0 0.25em` }}
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href={`https://linkedin.com/in/${social.linkedIn}`}
            style={{ margin: `0 0.25em` }}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </span>
      </p>
    </div>
  );
};

export default Bio;
