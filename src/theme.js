import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
    },
  },
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#00ac4d",
    },
  },
});

export default theme;
