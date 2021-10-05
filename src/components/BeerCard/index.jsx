import { ItemLiContainer } from "./style";
import Button from "../Button";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { Modal, Radio } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

const BeerCard = ({ beer, type }) => {
  const { id, image_url, name, first_brewed, description, volume } = beer;
  const [open, setOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("");

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
  }));

  console.log("state do radio", radioValue);
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
      <h4>Qtdade: {volume.value}L</h4>
      {type === "catalogue" && (
        <p className="beerDescription" onClick={handleClickOpenDescrip}>
          Descrição
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
        >
          <FormControlLabel
            value="Graduation"
            control={<Radio size="small" />}
            label="Formatura"
          />
          <FormControlLabel
            value="Wedding"
            control={<Radio size="small" />}
            label="Casamento"
          />
          <FormControlLabel
            value="Gathering"
            control={<Radio size="small" />}
            label="Confraternização"
          />
        </RadioGroup>
      )}

      <Button type={type} item={beer}></Button>
    </ItemLiContainer>
  );
};

export default BeerCard;
