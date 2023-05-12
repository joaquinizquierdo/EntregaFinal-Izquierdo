import styled from "styled-components";
import { colors } from "../../theme";
import { useRef, useState } from "react";
import { sendOrder } from "../../services/crud";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Divs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  input{
    width: 100%;
    height: 2em;
    margin-top: 10px;
    border: 2px solid grey;
    border-radius: 20px;
    text-align: center;
  };
`;

const OrderButton = styled.button`
  background: none;
  width: 80%;
  height: 2em;
  margin: 20px auto;
  border: 2px solid grey;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
`;

const H2Final = styled.h2`
  color: ${colors.color};
`;

const CartForm = ({ orderItems }) => {
  const { clearCart, cartTotal } = useContext(CartContext);

  const inputRefName = useRef(null);
  const inputRefEmail = useRef(null);
  const inputRefNum = useRef(null);
  const [errorMsj, setErrorMsj] = useState(true);
  const [finalMsj, setFinalMsj] = useState(true);

  const handleBlur = () => {
    if (inputRefName.current.value !== '' && inputRefEmail.current.value !== '' && inputRefNum.current.value !== '') {
      setErrorMsj(false);
    } else {
      setErrorMsj(true);
    };
  };

  const handleSendOrder = (e) => {
    const data = {
      nombre: inputRefName.current.value,
      mail: inputRefEmail.current.value,
      phone: inputRefNum.current.value,
      orderProds: orderItems,
    };
    sendOrder(data);
    setFinalMsj(true);
    clearCart();
  };

  if (finalMsj) {
    return (
      <H2Final>Gracias por su compra!</H2Final>
    )
  }

  return (
    <Container>
      <Divs>
        <label>Nombre y apellido</label>
        <input type="text" ref={inputRefName} onBlur={handleBlur} />
      </Divs>
      <Divs>
        <label>Correo electronico</label>
        <input type="email" ref={inputRefEmail} onBlur={handleBlur} />
      </Divs>
      <Divs>
        <label>Celular</label>
        <input type="tel" ref={inputRefNum} onBlur={handleBlur} />
      </Divs>
      <OrderButton onClick={handleSendOrder} disabled={errorMsj || cartTotal === 0}>{errorMsj ? 'Complete los datos' : 'Comprar'}</OrderButton>
    </Container>
  );
};

export default CartForm;
