import React from "react"
import renderer from "react-test-renderer"

import Layout from "../layout"


describe("Layout", () => {
  describe("when on root path", () => {
    it("renders correctly", () => {
      const location = {
        pathname: '/'
      }

      const tree = renderer
      .create(<Layout location={location} />)
      .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
