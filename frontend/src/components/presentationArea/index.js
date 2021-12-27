import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Paper } from "@mui/material";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  paperStyle: {
    marginBlock: 10,
    marginInline: 20,
    paddingBlock: 20,
  },
  typogStyle: {
    color: "white",
  },
  iconStyle: {
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function PresentationArea({ title, subTitle }) {
  const isMobile = useWindowSize().width < 640;
  const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{ bgcolor: "#128ced", boxShadow: 3 }}
        className={style.paperStyle}
        elevation={3}
      >
        <Grid container spacing={3}>
          {!isMobile && (
            <Grid item xs={2} className={style.iconStyle}>
              <LiveHelpIcon sx={{ fontSize: 80, color: "white" }} />
            </Grid>
          )}
          <Grid item xs={isMobile ? 12 : 9}>
            <Typography
              className={style.typogStyle}
              variant={isMobile ? "h5" : "h4"}
              gutterBottom
              sx={isMobile ? { textAlign: "center" } : { textAlign: "left" }}
            >
              {title}
            </Typography>
            <Typography
              className={style.typogStyle}
              variant={isMobile ? "subtitle1" : "h6"}
              gutterBottom
              sx={isMobile ? { textAlign: "center" } : { textAlign: "left" }}
            >
              {subTitle}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
