import { ItemLiContainer } from "./style";
// import { useDispatch } from "react-redux";
// import Buttons from "../Buttons";

const BeerCard = ({ beer /*isRemovable = false*/ }) => {
  // const dispatch = useDispatch();

  const { id, image_url, name, first_brewed, description, volume } = beer;

  return (
    <ItemLiContainer>
      <h3>{name}</h3>
      <img src={image_url} alt={name} />
      <h4>
        <span>Início de Fabricação:</span> {first_brewed}
      </h4>
      {/* {isRemovable ? (
        <Buttons removeSchema onClick={() => dispatch(removeFromCartThunk(id))}>
          Remover do carrinho
        </Buttons>
      ) : (
        <Buttons onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar ao carrinho
        </Buttons>
      )} */}
    </ItemLiContainer>
  );
};

export default BeerCard;
