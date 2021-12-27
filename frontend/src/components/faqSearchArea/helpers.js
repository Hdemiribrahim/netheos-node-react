import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
export const Search = styled("div")(() => ({
    display: "flex",
    justifyContent: "right",
    width: "35%",
    paddingRight: 20,
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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