import styled from "styled-components";
import { colors } from "../../theme";
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
`;

const DivImg = styled.div`
  width: 30em;
  height: 30em;
`;
const Img =  styled.img`
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
`;

const H2name = styled.h2`
  width: 6em;
  margin-bottom: 30px;
  color: ${colors.color};
  border-bottom: 3px solid ${colors.color};
`;

const ItemDetail = ({name, price, img, stock}) => {
  return (
    <Article>
      <DivContainer>
        <DivImg>
          <Img src={img} alt={img}/>
        </DivImg>
        <DivShop>
          <DivData>
            <H2name>{name}</H2name>
            <h2>${price}</h2>
          </DivData>
          <ItemCount stock={stock} initial={1} onAdd={(cantidad) => console.log('Se agregaron ', cantidad, ' productos')}/>
        </DivShop>
      </DivContainer>
    </Article>
  );
};

export default ItemDetail;