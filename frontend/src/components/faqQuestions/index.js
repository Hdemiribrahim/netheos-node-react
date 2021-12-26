import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export default function FaqQuestions({ title, question, answer }) {
  const isMobile = useWindowSize().width < 640;
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
      </Accordion>
    </ThemeProvider>
  );
}
