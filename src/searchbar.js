import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        background: "#252E39",
        borderRadius: "2px",
        width: "414px",
        height: "40px"
    },
    input: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "21px",
        display: "flex",
        alignItems: "center",
        color: "rgba(255, 255, 255, 0.1)"
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{ "poppins": "search" }}
            />
        </Paper>
    );
}
