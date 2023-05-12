import styled from "styled-components";
import { colors } from "../../theme";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
`;

const Layout = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
`;

const Img = styled.img`
  width: 100px;
  margin-left: 30px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const RemoveButton = styled.button`
  width: 7em;
  color: grey;
  background-color: ${colors.primary};
  border: 2px solid grey;
  border-radius: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  &:hover {
    color: ${colors.color};
    border: 2px solid ${colors.color};
  }
`;

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <Container>
      <Layout>
        <Img src={img} alt={img} />
        <Data>
          <p>{name}</p>
          <p>${price}</p>
          <p>{quantity}</p>
          <RemoveButton onClick={() => removeFromCart(id)}>Quitar</RemoveButton>
        </Data>
      </Layout>
    </Container>
  );
};

export default CartItem;
