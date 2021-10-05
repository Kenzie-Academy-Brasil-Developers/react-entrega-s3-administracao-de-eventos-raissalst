import { ItemLiContainer } from "./style";
import Button from "../Button";

const BeerCard = ({ beer, type }) => {
  const { id, image_url, name, first_brewed, description, volume } = beer;

  return (
    <ItemLiContainer>
      <h3>{name}</h3>
      <img src={image_url} alt={name} />
      <h4>
        <span>Início de Fabricação:</span> {first_brewed}
      </h4>
      <Button type={type} item={beer}></Button>
    </ItemLiContainer>
  );
};

export default BeerCard;
