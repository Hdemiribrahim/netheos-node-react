import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";
import { Paper, Box, InputBase, Typography } from "@mui/material";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeProvider } from "@mui/material/styles";
import FaqQuestions from "../faqQuestions";
import theme from "../theme";

const Search = styled("div")(() => ({
  display: "flex",
  justifyContent: "right",
  width: "35%",
  paddingRight: 20,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
  },
}));
const useStyles = makeStyles(() => ({
  paperStyle: {
    marginBlock: 10,
    marginInline: 20,
    padding: 5,
  },
  box: {
    marginBlock: 10,
    marginInline: 20,
    padding: 5,
  },
  typoStyle: {
    color: "white",
    paddingLeft: 20,
    width: "65%",
  },
}));
export default function SearchArea() {
  const [searchContent, setSearchContent] = useState("");
  const [data, setData] = useState("");

  const isMobile = useWindowSize().width < 640;
  const style = useStyles();
  const startSearch = (e) => {
    setSearchContent(e.target.value);
  };
  useEffect(() => {
    // Search after typing
    const delay = setTimeout(() => {
      if (searchContent != "") {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ searchText: searchContent }),
        };
        fetch("/search", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              setData(data.data);
            }
          });
      } else {
        setData([]);
      }
    }, 1000 / 5);
    return () => clearTimeout(delay);
  }, [searchContent]);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{ bgcolor: "#128ced", boxShadow: 3 }}
        className={style.paperStyle}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            className={style.typoStyle}
            variant={isMobile ? "subtitle1" : "h6"}
            gutterBottom
          >
            Écrivez la question ou la réponse que vous souhaitez rechercher
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Recherche..."
              inputProps={{ "aria-label": "search" }}
              value={searchContent}
              onChange={(e) => {
                startSearch(e);
              }}
            />
          </Search>
        </Box>

        {data && data.length >= 1 ? (
          <Box className={style.box}>
            {data.map((value, index) => {
              return (
                <FaqQuestions
                  key={index}
                  id={value?.id}
                  title={value?.tag}
                  question={value?.question}
                  answer={value?.answer}
                />
              );
            })}
          </Box>
        ) : (
          <></>
        )}
      </Paper>
    </ThemeProvider>
  );
}
