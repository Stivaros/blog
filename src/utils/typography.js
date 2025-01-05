import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";

fairyGatesTheme.overrideThemeStyles = () => {
  const midGreen = `#8BC34A`;
  const darkGreen = `#33691E`;
  const lightGreen = `#C5E1A5`;
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1 a": {
      textDecoration: `none`,
    },
    a: {
      color: darkGreen,
      textShadow: `none`,
      backgroundImage: `none`,
      textDecoration: `underline`,
    },
    "a:hover": {
      backgroundColor: lightGreen,
      transition: `all 0.4s`,
    },
    blockquote: {
      backgroundColor: lightGreen,
      borderLeftColor: midGreen,
      padding: `0.5em`,
    },
    "a:focus": {
      boxShadow: `0 0 0 3px ${midGreen}    `,
      outline: `none`,
    },
  };
};

const typography = new Typography(fairyGatesTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
