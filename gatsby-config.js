module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Blog`,
    author: {
      name: `Efstathios Stivaros`,
      summary: `a full-stack developer (predominantly Ruby on Rails) from London.`,
    },
    description: `My blog, mainly about code and other nerdy stuff`,
    siteUrl: `http://blog.stivaros.com/`,
    social: {
      twitter: `eStivaros`,
      linkedIn: `estivaros`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                zsh: "bash"
              },
              inlineCodeMarker: '›',
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Efstathios Stivaros | Blog`,
        short_name: `ES' Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#8BC34A`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-percy`
  ],
}
