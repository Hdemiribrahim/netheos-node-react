import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeProvider } from "@mui/material/styles";
import FaqQuestions from "../faqQuestions";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    marginBlock: 10,
    marginInline: 20,
  },
}));
export default function FaqMainTitles({ title, content }) {
  const isMobile = useWindowSize().width < 640;
  const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper className={style.paperStyle} sx={{ boxShadow: 3 }}>
        <Accordion variant="body2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant={isMobile ? "subtitle1" : "h6"}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {content?.rows ? (
              <>
                {content.rows.map((value, index) => {
                  return (
                    <FaqQuestions
                      key={index}
                      id={value?.id}
                      title={value?.tag}
                      question={value?.question}
                      answer={value?.answer}
                      deleteShow={true}
                    />
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </AccordionDetails>
        </Accordion>
      </Paper>
    </ThemeProvider>
  );
}
