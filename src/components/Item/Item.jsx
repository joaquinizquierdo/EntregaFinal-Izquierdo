import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../theme";

const Article = styled.article`
  width: fit-content;
  height: fit-content;
  margin: 10px;
  font-family: 'Oswald', sans-serif;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${colors.primary};
`;

const LinkNav = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Img = styled.img`
  width: 20em;
  height: 20em;
  border: 2px solid black;
  border-radius: 1px;
`;

const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`;

const Item = ({id, name, price, img, stock}) => {
  return (
    <Article>
      <LinkNav to={`/products/${id}`}>
        <Img src={img} alt={img}/>
        <DivInfo>
          <h2>{name}</h2>
          <h3>Precio: ${price}</h3>
          <h3>Stock: {stock} u</h3>
        </DivInfo>
      </LinkNav>
    </Article>
  );
};

export default Item;