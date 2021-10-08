import BeerListDisplay from "../../components/BeerListDisplay";
import {
  MainContainerBeerListWed,
  HeaderContainerWed,
  ContainerTableWed,
} from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Wedding = () => {
  const useStyles = makeStyles(() => ({
    table: {
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
  const { cartWed, cartWedFiltered } = useContext(CartContext);

  return (
    <>
      <HeaderContainerWed>
        <h1>Casamento</h1>
      </HeaderContainerWed>
      <MainContainerBeerListWed>
        <BeerListDisplay type="cartWed" />
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
              {!!cartWedFiltered &&
                cartWedFiltered.map((beer) => (
                  <TableRow key={beer.id}>
                    <TableCell component="th" scope="row">
                      {beer.name}
                    </TableCell>
                    <TableCell align="right">{beer.quantity * 20}</TableCell>
                  </TableRow>
                ))}
              <TableRow>
                <TableCell className={classes.footer}>Total (L)</TableCell>
                <TableCell className={classes.footer} align="right">
                  {cartWedFiltered.reduce(
                    (acc, item) => acc + item.quantity * 20,
                    0
                  )}
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
