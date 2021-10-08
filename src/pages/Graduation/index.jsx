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
  const { cart, cartFiltered, cartVolume } = useContext(CartContext);

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

        {cart && (
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
              {cartFiltered.length[0] !== undefined
                ? cartFiltered.map((beer, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {beer.name}
                      </TableCell>
                      <TableCell align="right">
                        {cartVolume[beer.id] * 20}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
              <TableRow>
                <TableCell className={classes.footer}>Total (L)</TableCell>
                <TableCell className={classes.footer} align="right">
                  {/* {cartVolume.reduce((acc, item) => acc + item * 20, 0)}
                   */}
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
