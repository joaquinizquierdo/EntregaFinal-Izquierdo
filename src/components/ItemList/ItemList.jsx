import styled from "styled-components";
import Item from "../Item/Item";

const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemList = ({products}) => {
  return (
    <Div>
      {products.map(prod => <Item {...prod}/>)}
    </Div>
  );
};

export default ItemList;