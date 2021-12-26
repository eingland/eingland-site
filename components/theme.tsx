// theme.tsx

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config }, {
  components: {
    Link: {
      baseStyle: {
        color: 'blue.500'
      },
    },
  },
})

export default theme