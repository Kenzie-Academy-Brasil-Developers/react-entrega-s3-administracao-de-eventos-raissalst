import Button from "../Button";
import { useState, useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ItemLiContainer } from "./style";
import Box from "@material-ui/core/Box";
import {
  Modal,
  Radio,
  Typography,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { GiClick, GiLovers, GiPartyPopper } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

const BeerCard = ({ beer, type, qtityWed, qtityGather }) => {
  const { id, image_url, name, first_brewed, description, volume } = beer;
  const [open, setOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const { cartVolume } = useContext(CartContext);

  const handleClickOpenDescrip = () => {
    setOpen(true);
  };
  const handleClickCloseDescrip = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setRadioValue(e.target.value);
  };

  const useStyles = makeStyles(() => ({
    box: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 300,
      backgroundColor: "#ff9800",
      border: "2px solid black",
      boxShadow: 24,
      padding: 4,
    },
    textMain: {
      marginTop: 5,
    },
    radioGroup: {
      textAlign: "center",
      justifyContent: "center",
    },
  }));

  // console.log("state do radio", radioValue);
  const classes = useStyles();

  return (
    <ItemLiContainer>
      <h3>{name}</h3>
      <img src={image_url} alt={name} />
      {type === "catalogue" && (
        <h4>
          <span>1ª Fabricação:</span> {first_brewed}
        </h4>
      )}
      {type === "catalogue" && <h4>Qtdade: {volume.value}L</h4>}
      {type === "cart" && (
        // <h4>
        //   Qtdade: {cartVolume[id]} x {volume.value}L
        // </h4>
        <div className="counterContainer">
          <Button type={type} item={beer} typeSumSub={"sub"}>
            -
          </Button>

          <p>{beer.quantity}</p>
          <Button type={type} item={beer} typeSumSub={"add"}>
            +
          </Button>
        </div>
      )}
      {type === "cartWed" && (
        <h4>
          Qtdade: {qtityWed} x {volume.value}L
        </h4>
      )}
      {type === "cartGather" && (
        <h4>
          Qtdade: {qtityGather} x {volume.value}L
        </h4>
      )}

      {type === "catalogue" && (
        <p className="beerDescription" onClick={handleClickOpenDescrip}>
          Descrição <GiClick />
        </p>
      )}
      <Modal open={open} onClose={handleClickCloseDescrip}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h2">
            Descrição da {name}
          </Typography>
          <Typography className={classes.textMain}>{description}</Typography>
        </Box>
      </Modal>

      {type === "catalogue" && (
        <RadioGroup
          row
          name="radioGroup"
          value={radioValue}
          onChange={handleChange}
          className={classes.radioGroup}
        >
          <FormControlLabel
            value="Graduation"
            control={<Radio size="small" />}
            label={<FaGraduationCap />}
          />
          <FormControlLabel
            value="Wedding"
            control={<Radio size="small" />}
            label={<GiLovers />}
          />
          <FormControlLabel
            value="Gathering"
            control={<Radio size="small" />}
            label={<GiPartyPopper />}
          />
        </RadioGroup>
      )}

      <Button type={type} item={beer} radioValue={radioValue}></Button>
    </ItemLiContainer>
  );
};

export default BeerCard;
