import BeerListDisplay from "../../components/BeerListDisplay";
import {
  MainContainerBeerListWed,
  HeaderContainerWed,
  ContainerTableWed,
} from "./style";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Wedding = () => {
  const useStyles = makeStyles(() => ({
    table: {
      // backgroundColor: "#000",
      fontFamily: "var(--mainFont)",
      color: "var(--orange)",
      minWidth: "250px",
      maxWidth: "400px",
    },
    header: {
      backgroundColor: "#000",
      color: "white",
    },
    footer: {
      backgroundColor: "#ccc",
      color: "#000",
      fontWeight: "bolder",
    },
  }));

  const classes = useStyles();
  const { cartWed } = useContext(CartContext);

  let newArraySortedWed = [];
  let newArrayFilteredWed = [];
  let idVolumesOfBeerWed = [];

  if (cartWed.length !== 0) {
    newArraySortedWed = cartWed.sort((a, b) => {
      return a.id - b.id;
    });

    newArrayFilteredWed = [newArraySortedWed[0]];
    let aux = "";

    for (let i = 1; i < newArraySortedWed.length; i++) {
      aux = newArraySortedWed[i - 1];
      if (aux !== newArraySortedWed[i]) {
        newArrayFilteredWed.push(newArraySortedWed[i]);
      }
    }

    cartWed.forEach((item) => {
      if (idVolumesOfBeerWed[item.id] === undefined) {
        return (idVolumesOfBeerWed[item.id] = 1);
      } else {
        return (idVolumesOfBeerWed[item.id] = idVolumesOfBeerWed[item.id] + 1);
      }
    });
  }
  return (
    <>
      <HeaderContainerWed>
        <h1>Casamento</h1>
      </HeaderContainerWed>
      <MainContainerBeerListWed>
        <BeerListDisplay
          type="cartWed"
          arrayWed={newArrayFilteredWed}
          qtityWed={idVolumesOfBeerWed}
        />
      </MainContainerBeerListWed>

      <ContainerTableWed>
        <h5>Resumo do Pedido</h5>

        {cartWed && (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Bebida</TableCell>
                <TableCell className={classes.header} align="right">
                  Qtdade (L)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newArrayFilteredWed.map((beer, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {beer.name}
                  </TableCell>
                  <TableCell align="right">
                    {idVolumesOfBeerWed[beer.id] * 20}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className={classes.footer}>Total (L)</TableCell>
                <TableCell className={classes.footer} align="right">
                  {idVolumesOfBeerWed.reduce((acc, item) => acc + item * 20, 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </ContainerTableWed>
    </>
  );
};

export default Wedding;
