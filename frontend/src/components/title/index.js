import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import useWindowSize from "../../utils/useWindowSize";
import theme from "../../theme";
const useStyles = makeStyles((theme) => ({
  typogStyle: {
    padding: 10,
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function Title({ title }) {
  const isMobile = useWindowSize().width < 640;
  const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Typography
        className={style.typogStyle}
        variant={isMobile ? "h6" : "h5"}
        gutterBottom
      >
        {" "}
        {title}
      </Typography>
    </ThemeProvider>
  );
}
