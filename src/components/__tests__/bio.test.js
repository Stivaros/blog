import React from "react"
import { render, screen } from "@testing-library/react"
import { PureBio as Bio } from "../bio"

describe("Bio", () => {
  it("renders author info and social links", () => {
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

    render(<Bio data={data} />)

    expect(screen.getByText(/Stath/)).toBeInTheDocument()
    expect(screen.getByText(/A test blog/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', 'https://twitter.com/twitterHandle')
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://linkedin.com/in/linkedInHandle')
  })
})
