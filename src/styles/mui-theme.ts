import OpenSansRegular from '@fonts/OpenSans-Regular.ttf';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [`${OpenSansRegular}`].join(','),
  },
  palette: {
    primary: {
      main: '#fa8b02',
      light: '#ffffff',
      dark: '#333333',
    },
    secondary: {
      main: '#333333',
    },
    info: {
      main: '#ffffff',
    },
  },
});
