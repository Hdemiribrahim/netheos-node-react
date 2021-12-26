import React, {useContext} from "react";
import { makeStyles } from "@mui/styles";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const useStyles = makeStyles(() => ({
  toolbarStyle: {
    backgroundColor: "black",
  },
  leftSection: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));
export default function Header({ name }) {
  const styles = useStyles();
  const [LoggedIn, setLoggedIn] = useContext(AuthContext);
  const logoutOnClick = () => {
    sessionStorage.removeItem("token");
    setLoggedIn(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.root}>
        <AppBar position="static">
          <Toolbar className={styles.toolbarStyle}>
            <Button component={Link} to={"/"}>
              <Typography variant="h6" className={styles.title}>
                {name || ""}
              </Typography>
            </Button>
            <div className={styles.leftSection}>
              <Button component={Link} to={"/"} color="inherit">
                HOME
              </Button>
              {LoggedIn ? (
                <Button
                  className={styles.lastButton}
                  component={Link}
                  to={"/adminListPage"}
                  color="inherit"
                >
                  toutes les questions
                </Button>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.rightSection}>
              {!LoggedIn ? (
                <Button
                  component={Link}
                  to={"/admin"}
                  color="inherit"
                  endIcon={<LoginIcon />}
                >
                  {" "}
                  Admin
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    logoutOnClick();
                  }}
                  color="inherit"
                  endIcon={<ExitToAppIcon />}
                >
                  {" "}
                  Logout
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
