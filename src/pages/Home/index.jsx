import BeerListDisplay from "../../components/BeerListDisplay";
import { HeaderContainerHome, MainContainerBeerList } from "./style";
import { GiLovers, GiPartyPopper } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { makeStyles } from "@material-ui/styles";
import { Toaster } from "react-hot-toast";

const useStyles = makeStyles(() => ({
  icon: {
    width: "60px",
    height: "60px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HeaderContainerHome>
        <h1>Encomende bebidas para o seu evento!</h1>
        <h3>Escolha por tipo de evento e adicione as bebidas desejadas</h3>

        <div>
          <h5>
            Formatura
            <br /> <FaGraduationCap className={classes.icon} />
          </h5>
          <h5>
            Casamento
            <br />
            <GiLovers className={classes.icon} />
          </h5>
          <h5>
            Festa
            <br />
            <GiPartyPopper className={classes.icon} />
          </h5>
        </div>

        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
                minWidth: "200px",
                fontWeight: "bold",
              },
            },
          }}
        />
      </HeaderContainerHome>
      <MainContainerBeerList>
        <BeerListDisplay type="catalogue" />
      </MainContainerBeerList>
    </>
  );
};

export default Home;
