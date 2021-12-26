import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { DataContext } from "../../context/dataContext";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export default function FaqQuestions({ title, question, answer, id, deleteShow }) {
  const [faqData, setFaqData] = useContext(DataContext);
  const [LoggedIn, setLoggedIn] = useContext(AuthContext);
  const isMobile = useWindowSize().width < 640;
  const deleteData = () =>{
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id:id }),
    };
    fetch("/deleteData", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if(data.success){
          setFaqData(data.data);
        }
      });
  }
  return (
    <ThemeProvider theme={theme}>
      <Accordion variant="body" sx={{ boxShadow: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant={isMobile ? "subtitle2" : "subtitle1"}
            sx={{ width: "60%" }}
          >
            {question}
          </Typography>
          <Typography
            variant={isMobile ? "subtitle2" : "subtitle1"}
            sx={{ width: "33%", flexShrink: 0, color: "text.secondary" }}
            align="right"
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={isMobile ? "body2" : "body1"}>
            {answer}
          </Typography>
        </AccordionDetails>
        {LoggedIn && deleteShow? (
          <Box display="flex" justifyContent="end" fullWidth>
          <Button
            size="small"
            color="error"
            variant="outlined"
            endIcon={<DeleteIcon />}
            sx={{ margin: 2 }}
            onClick={()=>(deleteData())}
          >
            Delete
          </Button>
        </Box>
        ):(<></>)}
        
      </Accordion>
    </ThemeProvider>
  );
}
