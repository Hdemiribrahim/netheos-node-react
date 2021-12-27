import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toastr from "../components/toastr";
const theme = createTheme();

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const [openToastr, setOpenToastr] = useState(false);
  const [typeToastr, setTypeToastr] = useState();
  const [infoToastr, setInfoToastr] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let username = data.get("username");
    let password = data.get("password");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch("/admin/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLoggedIn(true);
          sessionStorage.setItem("token", JSON.stringify(data.token));
          navigate("/faq");
        } else {
          setOpenToastr(true);
          setTypeToastr("error");
          setInfoToastr(data?.info);
        }
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Connexion
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="current-username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Connexion
            </Button>
          </Box>
        </Box>
        <Toastr
          open={openToastr}
          setOpen={setOpenToastr}
          type={typeToastr}
          info={infoToastr}
        />
      </Container>
    </ThemeProvider>
  );
}
