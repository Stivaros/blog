import React from "react"
import renderer from "react-test-renderer"

import { PureBio as Bio } from "../bio"


describe("Bio", () => {
  it("renders correctly", () => {
    const data = {
      avatar: {
        childImageSharp: {},
      },
      site: {
        siteMetadata: {
          author: {
            name: 'Stath',
            summary: 'A test blog',
          },
          social: {
            twitter: 'twitterHandle',
            linkedIn: 'linkedInHandle',
          },
        },
      },
    }

    const tree = renderer
    .create(<Bio data={data} />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
