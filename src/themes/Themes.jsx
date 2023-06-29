import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    darkPrimary: '#27374D',
    lightPrimary: '#FFFFFF',
    sidebar: '#526D82',
    primary: '#E3F4F4',
    accent: '#448AFF',
    accentSecondary: '#1B60D8',
    primaryTextIcon: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#757575',
    card: '#D1D4E9',
    divider: '#BDBDBD',
    dividerSidebar: 'linear-gradient(to right, #B5B8CF, #777777, #B5B8CF)',
    login: '#000000',
    loginSecondary: '#000000',
    inputBorder : "#C5CAE9",
  },
  components: {
    Text: {
      baseStyle: {
        color: "primaryText",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'regular',
        fontFamily: 'Fira Code, monospace',
      },
      sizes: {
        md: {
          width: '4.2rem',
          height: '2.3rem',
          fontSize: '0.70rem',
        },
        xl: {
          width: '5.6rem',
          height: '2.65rem',
          fontSize: '0.95rem',
        },
      },
      defaultProps: {
        size: 'xl',
        fontWeight: "semibold",
      },
    },
  },
});
