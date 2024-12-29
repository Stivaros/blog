import React from "react"
import { render, waitFor } from "@testing-library/react"
import { PureSeo as Seo } from "../seo"

describe("Seo", () => {
  const defaultSite = {
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

  it("sets basic meta tags", async () => {
    render(<Seo site={defaultSite} {...defaultProps} />)
    
    await waitFor(() => {
      expect(document.title).toBe('Test Title | Test Blog')
      expect(document.querySelector('html')).toHaveAttribute('lang', 'en')
      expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Test meta description')
    })
  })

  it("sets OpenGraph meta tags", async () => {
    render(<Seo site={defaultSite} {...defaultProps} />)
    
    await waitFor(() => {
      expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', 'Test Title')
      expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', 'Test meta description')
      expect(document.querySelector('meta[property="og:type"]')).toHaveAttribute('content', 'website')
    })
  })

  it("sets Twitter meta tags", async () => {
    render(<Seo site={defaultSite} {...defaultProps} />)
    
    await waitFor(() => {
      expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary')
      expect(document.querySelector('meta[name="twitter:creator"]')).toHaveAttribute('content', 'twitterHandle')
      expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute('content', 'Test Title')
      expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute('content', 'Test meta description')
    })
  })

  it("uses provided description over site description", async () => {
    const propsWithDescription = {
      ...defaultProps,
      description: "Custom description"
    }

    render(<Seo site={defaultSite} {...propsWithDescription} />)
    
    await waitFor(() => {
      expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Custom description')
      expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', 'Custom description')
      expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute('content', 'Custom description')
    })
  })

  it("allows additional meta tags", async () => {
    const propsWithMeta = {
      ...defaultProps,
      meta: [
        {
          name: 'custom-tag',
          content: 'custom-content'
        }
      ]
    }

    render(<Seo site={defaultSite} {...propsWithMeta} />)
    
    await waitFor(() => {
      expect(document.querySelector('meta[name="custom-tag"]')).toHaveAttribute('content', 'custom-content')
    })
  })
})
