import React from "react"
import { render, screen } from "@testing-library/react"
import { PureBio, Bio } from "../bio"

describe("Bio", () => {
  const defaultData = {
    avatar: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'fixed',
          width: 50,
          height: 50,
          images: {
            fallback: {
              src: 'test-image.jpg'
            }
          }
        }
      },
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

  describe("PureBio", () => {
    it("renders author information with avatar", () => {
      render(<PureBio data={defaultData} />)
  
      const { name, summary } = defaultData.site.siteMetadata.author
      
      const avatar = screen.getByTestId('gatsby-image')
      expect(avatar).toHaveAttribute('alt', name)
      
      expect(screen.getByText(new RegExp(name))).toBeInTheDocument()
      expect(screen.getByText(new RegExp(summary))).toBeInTheDocument()
    })
  
    describe("social links", () => {
      beforeEach(() => {
        render(<PureBio data={defaultData} />)
      })
  
      it("renders home link", () => {
        const homeLink = screen.getByRole('link', { name: /home/i })
        expect(homeLink).toHaveAttribute('href', 'http://stivaros.com/')
      })
  
      it("renders Twitter link", () => {
        const { twitter } = defaultData.site.siteMetadata.social
        const twitterLink = screen.getByRole('link', { name: /twitter/i })
        expect(twitterLink).toHaveAttribute('href', `https://twitter.com/${twitter}`)
      })
  
      it("renders LinkedIn link", () => {
        const { linkedIn } = defaultData.site.siteMetadata.social
        const linkedInLink = screen.getByRole('link', { name: /linkedin/i })
        expect(linkedInLink).toHaveAttribute('href', `https://linkedin.com/in/${linkedIn}`)
      })
  
      it("groups social links together", () => {
        const socialContainer = screen.getByLabelText(/social links/i)
        expect(socialContainer).toBeInTheDocument()
      })
    })
  })

  describe("Bio with GraphQL", () => {
    it("renders using data from useStaticQuery", () => {
      render(<Bio />)

      expect(screen.getByText(/Stath/)).toBeInTheDocument()
      expect(screen.getByText(/A test blog/)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', 'https://twitter.com/twitterHandle')
      expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://linkedin.com/in/linkedInHandle')
    })
  })
})