import React from "react"
import renderer from "react-test-renderer"

import { PureSeo as Seo } from "../seo"

describe("Seo", () => {
  it("renders correctly", () => {
    const site = {
      siteMetadata: {
        title: 'Test Blog',
        description: 'Test meta description',
        social: {
          twitter: 'twitterHandle'
        }
      }
    }

    const defaultProps = {
      lang: `en`,
      meta: [],
      description: ``,
    }

    const tree = renderer
    .create(<Seo site={site} title={'Test Title'} {...defaultProps} />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
