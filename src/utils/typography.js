import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = () => {
  const linkColor = `#8bc34a`;
  const linkDarkShade = `#689f38`;
  const linkLightShade = `#dcedc8`;
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: linkColor,
      textShadow: `none`,
      backgroundImage: `none`
    },
    "a:hover": {
      color: linkDarkShade,
      transition: `all 0.4s`
    },
    "blockquote": {
      backgroundColor: linkLightShade,
      borderLeftColor: linkColor,
      padding: `0.5em`,
    }
  }
}

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
