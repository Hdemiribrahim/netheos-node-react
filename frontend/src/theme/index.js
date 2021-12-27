import { createTheme} from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: [
            'BlinkMacSystemFont',
          ].join(','),
        subtitle1: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        h5: { fontWeight: 600 }
    },
});
export default theme;