import BeerListDisplay from "../../components/BeerListDisplay";
import {
  ContainerTableGrad,
  HeaderContainerGrad,
  MainContainerBeerListGrad,
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

const Graduation = () => {
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
  const { cartFiltered } = useContext(CartContext);

  return (
    <>
      <HeaderContainerGrad>
        <h1>Formatura</h1>
      </HeaderContainerGrad>
      <MainContainerBeerListGrad>
        <BeerListDisplay type="cart" />
      </MainContainerBeerListGrad>

      <ContainerTableGrad>
        <h5>Resumo do Pedido</h5>

        {cartFiltered && (
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
              {!!cartFiltered &&
                cartFiltered.map((beer) => (
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
                  {cartFiltered.reduce(
                    (acc, item) => acc + item.quantity * 20,
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </ContainerTableGrad>
    </>
  );
};

export default Graduation;
