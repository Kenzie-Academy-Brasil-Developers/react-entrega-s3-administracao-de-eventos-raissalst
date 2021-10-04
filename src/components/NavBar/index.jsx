import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "var(--blue)",
    fontFamily: "var(--mainFont)",
    color: "#ffffff",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
        <MenuItem onClick={() => sendTo("/graduation")}>Graduation</MenuItem>
        <MenuItem onClick={() => sendTo("/wedding")}>Wedding</MenuItem>
        <MenuItem onClick={() => sendTo("/gathering")}>Gathering</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
