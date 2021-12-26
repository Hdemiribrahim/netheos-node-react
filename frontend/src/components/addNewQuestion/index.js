import React, { useState, useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { makeStyles } from "@mui/styles";
import {
  Paper,
  Box,
  Button,
  Accordion,
  InputLabel,
  FormControl,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Select,
  MenuItem,
  Grow,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const useStyles = makeStyles(() => ({
  paperStyle: {
    marginBlock: 10,
    marginInline: 20,
  },
}));
export default function AddNewQuestion({
  title = "Ajouter une nouvelle question",
}) {
  const [setfaqData] = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);
  const isMobile = useWindowSize().width < 640;
  const style = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let question = data.get("question");
    let answer = data.get("answer");
    let tag = data.get("tag");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: question, answer: answer, tag: tag }),
    };
    fetch("/addData", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setfaqData(data);
      });
    event.currentTarget.reset();
  };
  return (
    <ThemeProvider theme={theme}>
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...(true ? { timeout: 2000 } : {})}
      >
        <Paper className={style.paperStyle} sx={{ boxShadow: 3 }}>
          <Accordion variant="body2" expanded={expanded}>
            <AccordionSummary
              expandIcon={expanded ? <RemoveIcon /> : <AddCircleOutlineIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <Typography
                variant={isMobile ? "subtitle2" : "subtitle1"}
                sx={{ width: "60%" }}
              >
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                  id="question"
                  label="Question"
                  name="question"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="answer"
                  label="Réponse"
                  id="answer"
                />
                <br />
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                  <InputLabel id="tag">Thématique</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="tag"
                    label="Thématique"
                    name="tag"
                    defaultValue={"Envoyer un colis"}
                  >
                    <MenuItem value={"Envoyer un colis"}>
                      Envoyer un colis
                    </MenuItem>
                    <MenuItem value={"Envoyer un courrirer"}>
                      Envoyer un courrirer
                    </MenuItem>
                    <MenuItem value={"Envoyer un objet de valeur"}>
                      Envoyer un objet de valeur
                    </MenuItem>
                    <MenuItem value={"Donner procuration"}>
                      Donner procuration
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ajouter
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grow>
    </ThemeProvider>
  );
}
