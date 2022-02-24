import React from "react"
import renderer from "react-test-renderer"

import Seo from "../seo"

describe("Seo", () => {
  it("renders correctly", () => {
    const tree = renderer
    .create(<Seo />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
