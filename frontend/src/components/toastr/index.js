import React from "react";
import { Snackbar, Alert } from "@mui/material";
export default function Toastr({ open, setOpen, type, info }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        variant="filled"
        onClose={() => setOpen(false)}
        severity={type || "info"}
        sx={{ width: "100%" }}
      >
        {info}
      </Alert>
    </Snackbar>
  );
}
