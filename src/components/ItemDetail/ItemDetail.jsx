import styled from "styled-components";
import { colors } from "../../theme";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const Article = styled.article`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const DivContainer = styled.div`
  width: 50em;
  display: flex;
  flex-direction: row;
  box-shadow: 10px 10px 5px grey;
`;

const DivImg = styled.div`
  width: 30em;
  height: 30em;
`;

const Img = styled.img`
  width: 30em;
  height: 30em;
`;

const DivShop = styled.div`
  width: 100%;
  padding: 5em 1px;
  display: flex;
  background-color: ${colors.secondary};
  flex-direction: column;
  justify-content: space-between;
`;

const DivData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3{
    font-weight: 400;
  };
`;

const H2name = styled.h2`
  width: 6em;
  margin-bottom: 30px;
  color: ${colors.color};
  border-bottom: 3px solid ${colors.color};
`;

const ItemDetail = ({ id, name, price, img, stock, desc }) => {
  const { addToCart } = useContext(CartContext);

  const handleOnAdd = (quantityToAdd) => {
    addToCart(id, name, price, quantityToAdd, img);
  };

  return (
    <Article>
      <DivContainer>
        <DivImg>
          <Img src={img} alt={img} />
        </DivImg>
        <DivShop>
          <DivData>
            <H2name>{name}</H2name>
            <h3>${price}</h3>
            <h3>{desc}</h3>
          </DivData>
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        </DivShop>
      </DivContainer>
    </Article>
  );
};

export default ItemDetail;

//<ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>