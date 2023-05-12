import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import CartForm from "../CartForm/CartForm";

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const ItemsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormDiv = styled.div`
  padding: 10px;
  margin-right: 25px;
`;

const Cart = () => {
  const { cart, cartTotal, cartValue } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      <CartContainer>
        <ItemsDiv>
          {cartTotal > 0 ? <CartList items={cart} total={cartValue} /> : <h3>No hay productos en la lista</h3>}
        </ItemsDiv>
        <FormDiv>
          <CartForm orderItems={cart} />
        </FormDiv>
      </CartContainer>
    </div>
  );
};

export default Cart;
