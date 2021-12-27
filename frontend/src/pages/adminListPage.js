import React, { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import Title from "../components/title";
import FaqQuestions from "../components/faqQuestions";

export function AdminListPage() {
  const [data, setData] = useState();
  const [tag, setTag] = React.useState("all");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tag: tag }),
    };
    fetch("/data/filter", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setData(data?.data);
        }
      });
  }, [tag]);
  return (
    <Paper sx={{ boxShadow: 3, margin: 2, padding: 2 }}>
      <Title title={"Toutes Les Questions"} />
      <Box display="flex" justifyContent="end" fullWidth>
        <FormControl sx={{ width: 250, marginBottom: 1 }}>
          <InputLabel id="demo-simple-select-label">
            Thématique filter
          </InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={tag}
            label="Choisissezl e thématique"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>Tout</MenuItem>
            <MenuItem value={"Envoyer un colis"}>Envoyer un colis</MenuItem>
            <MenuItem value={"Envoyer un courrirer"}>
              Envoyer un courrirer
            </MenuItem>
            <MenuItem value={"Envoyer un objet de valeur"}>
              Envoyer un objet de valeur
            </MenuItem>
            <MenuItem value={"Donner procuration"}>Donner procuration</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {data &&
        data.map((value, index) => {
          return (
            <FaqQuestions
              key={index}
              id={value?.id}
              title={value?.tag}
              question={value?.question}
              answer={value?.answer}
              deleteShow={false}
            />
          );
        })}
    </Paper>
  );
}
