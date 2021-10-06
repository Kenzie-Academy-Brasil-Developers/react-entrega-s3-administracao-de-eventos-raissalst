import BeerListDisplay from "../../components/BeerListDisplay";
import {
  ContainerTableGather,
  HeaderContainerGather,
  MainContainerBeerListGather,
} from "./style";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
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
  const { cartGather } = useContext(CartContext);

  let newArraySortedGather = [];
  let newArrayFilteredGather = [];
  let idVolumesOfBeerGather = [];

  if (cartGather.length !== 0) {
    newArraySortedGather = cartGather.sort((a, b) => {
      return a.id - b.id;
    });

    newArrayFilteredGather = [newArraySortedGather[0]];
    let aux = "";

    for (let i = 1; i < newArraySortedGather.length; i++) {
      aux = newArraySortedGather[i - 1];
      if (aux !== newArraySortedGather[i]) {
        newArrayFilteredGather.push(newArraySortedGather[i]);
      }
    }

    cartGather.forEach((item) => {
      if (idVolumesOfBeerGather[item.id] === undefined) {
        return (idVolumesOfBeerGather[item.id] = 1);
      } else {
        return (idVolumesOfBeerGather[item.id] =
          idVolumesOfBeerGather[item.id] + 1);
      }
    });
  }

  return (
    <>
      <HeaderContainerGather>
        <h1>Confraternização</h1>
      </HeaderContainerGather>

      <MainContainerBeerListGather>
        <BeerListDisplay
          type="cartGather"
          arrayGather={newArrayFilteredGather}
          qtityGather={idVolumesOfBeerGather}
        />
      </MainContainerBeerListGather>

      <ContainerTableGather>
        <h5>Resumo do Pedido</h5>

        {cartGather && (
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
              {newArrayFilteredGather.map((beer, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {beer.name}
                  </TableCell>
                  <TableCell align="right">
                    {idVolumesOfBeerGather[beer.id] * 20}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className={classes.footer}>Total (L)</TableCell>
                <TableCell className={classes.footer} align="right">
                  {idVolumesOfBeerGather.reduce(
                    (acc, item) => acc + item * 20,
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
