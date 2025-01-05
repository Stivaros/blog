const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    React.createElement("a", {
      ...rest,
      href: to,
    })
  ),
  useStaticQuery: jest.fn().mockReturnValue({
    avatar: {
      childImageSharp: {
        gatsbyImageData: {
          layout: "fixed",
          width: 50,
          height: 50,
          images: {
            fallback: {
              src: "test-image.jpg",
            },
          },
        },
      },
    },
    site: {
      siteMetadata: {
        title: "Test Blog",
        description: "Test meta description",
        author: {
          name: "Stath",
          summary: "A test blog",
        },
        social: {
          twitter: "twitterHandle",
          linkedIn: "linkedInHandle",
        },
      },
    },
  }),
};
