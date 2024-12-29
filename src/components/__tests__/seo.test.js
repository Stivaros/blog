import React from "react"
import renderer from "react-test-renderer"
import { render, waitFor } from "@testing-library/react"
import { PureSeo as Seo } from "../seo"

describe("Seo", () => {
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
    title: 'Test Title',
  }

  it("renders correctly", () => {
    const tree = renderer
      .create(<Seo site={site} {...defaultProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe("SEO with RTL", () => {
    it("sets correct meta tags", async () => {
      render(<Seo site={site} {...defaultProps} />)
      
      await waitFor(() => {
        expect(document.title).toBe('Test Title | Test Blog')
        expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Test meta description')
        expect(document.querySelector('meta[name="twitter:creator"]')).toHaveAttribute('content', 'twitterHandle')
      })
    })

    it("uses provided description over site description", async () => {
      const propsWithDescription = {
        ...defaultProps,
        description: "Custom description"
      }

      render(<Seo site={site} {...propsWithDescription} />)
      
      await waitFor(() => {
        expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Custom description')
      })
    })
  })
})
