import styled from 'styled-components';
import { colors } from '../../theme';
import { useState } from "react";

const Container = styled.div`
  width: 15em;
  background-color: ${colors.primary};
  border: 2px solid black;
  border-radius: 20px;
  width: fit-content;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Number = styled.p`
  display: inline;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 25px;
  margin-right: 25px;
`;

const ButtonCount = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-radius: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonAdd = styled.button`
  width: 15em;
  background-color: ${colors.primary};
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  &:hover {
    color: ${colors.color};
    border: 2px solid ${colors.color};
  };
`;

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setCantidad] = useState(initial);

  const subtract = () => {
    if (quantity > initial) {
      setCantidad(quantity - 1);
    };
  };

  const add = () => {
    if (quantity < stock) {
      setCantidad(quantity + 1);
    };
  };

  return (
    <div>
      <Container>
        <ButtonCount onClick={subtract} className='button'>-</ButtonCount>
        <Number>{quantity}</Number>
        <ButtonCount onClick={add} className='button'>+</ButtonCount>
      </Container>
      <ButtonAdd onClick={() => onAdd(quantity)} disabled={!stock}>Agregar a la compra</ButtonAdd>
    </div>
  );
};

export default ItemCount;