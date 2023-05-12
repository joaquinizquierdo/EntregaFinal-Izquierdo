import styled from "styled-components";
import { colors } from "../../theme";
import CartItem from "../CartItem/CartItem";

const Container = styled.div`
  flex: auto;
`;

const TotalPrice = styled.h2`
  text-align: center;
  margin: 30px;
  font-weight: 600;
  color: ${colors.color};
`;

const CartList = ({ items, total }) => {
  return (
    <Container>
      {items.map(items => <CartItem key={items.id} {...items} />)}
      <TotalPrice>Total: ${total}</TotalPrice>
    </Container>
  );
};

export default CartList;
