import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import { FaGraduationCap } from "react-icons/fa";
import { GiLovers, GiPartyPopper } from "react-icons/gi";
import { Badge } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "#000",
    fontFamily: "var(--mainFont)",
    color: "var(--orange)",
    minHeight: "65px",
  },
  item: {
    fontSize: "17px",
    lineHeight: "1",
    height: "50px",
    "@media (min-width: 1024px)": { fontSize: "19px" },
  },
}));

const NavBar = () => {
  const { cartFiltered } = useContext(CartContext);
  const classes = useStyles();

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  let totalCart = cartFiltered.reduce((acc, item) => acc + item.quantity, 0);
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
            <Badge badgeContent={totalCart} color="secondary">
              <FaGraduationCap />
            </Badge>
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
