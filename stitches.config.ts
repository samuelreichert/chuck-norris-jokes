import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    fonts: {
      system: 'Quicksand, sans-serif',
    },
    colors: {
      black: '#08070b',
      white: '#ffffff',
      green: '#8aff80',
      lightGrey: '#eaeaea',
    },
  },
})

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$system',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
  },
  h1: {
    color: '$black',
    fontSize: '48px',
    lineHeight: '50px',
    margin: '0 0 20px',
  },
  h2: {
    color: '$black',
    fontSize: '24px',
    margin: '0 0 20px',
  },
  ul: {
    margin: 0,
  },
  p: {
    color: '$black',
  },
  a: {
    borderBottom: '.5px solid $black',
    color: '$black',
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out',
  },
  'a:hover, a:focus': {
    opacity: '0.5',
  },
  '@font-face': [
    {
      fontFamily: 'Quicksand',
      src: `url("/static/fonts/Quicksand-Light.ttf") format("truetype")`,
      fontWeight: '300',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Quicksand',
      src: `url("/static/fonts/Quicksand-Medium.ttf") format("truetype")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Quicksand',
      src: `url("/static/fonts/Quicksand-SemiBold.ttf") format("truetype")`,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
  ],
})

globalStyles()
