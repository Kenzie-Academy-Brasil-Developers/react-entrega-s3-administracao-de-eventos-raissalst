import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import { FaGraduationCap } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "#000",
    fontFamily: "var(--mainFont)",
    color: "var(--orange)",
  },
  item: {
    fontSize: "17px",
    "@media (min-width: 1024px)": { fontSize: "19px" },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <MenuItem className={classes.item} onClick={() => sendTo("/")}>
            Home
          </MenuItem>
          <MenuItem
            className={classes.item}
            onClick={() => sendTo("/graduation")}
          >
            <FaGraduationCap />
          </MenuItem>
          <MenuItem className={classes.item} onClick={() => sendTo("/wedding")}>
            <GiLovers />
          </MenuItem>
          <MenuItem
            className={classes.item}
            onClick={() => sendTo("/gathering")}
          >
            <GiPartyPopper />
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
