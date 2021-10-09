import BeerListDisplay from "../../components/BeerListDisplay";
import {
  ContainerTableGather,
  HeaderContainerGather,
  MainContainerBeerListGather,
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

const Gathering = () => {
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
  const { cartGatherFiltered } = useContext(CartContext);

  return (
    <>
      <HeaderContainerGather>
        <h1>Confraternização</h1>
      </HeaderContainerGather>

      <MainContainerBeerListGather>
        <BeerListDisplay type="cartGather" />
      </MainContainerBeerListGather>

      <ContainerTableGather>
        <h5>Resumo do Pedido</h5>

        {cartGatherFiltered && (
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
              {!!cartGatherFiltered &&
                cartGatherFiltered.map((beer) => (
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
                  {cartGatherFiltered.reduce(
                    (acc, item) => acc + item.quantity * 20,
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </ContainerTableGather>
    </>
  );
};

export default Gathering;
