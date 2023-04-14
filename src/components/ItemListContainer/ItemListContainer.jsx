import styled from "styled-components";
import { colors } from "../../theme";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts, getProductsByCategory } from '../../asyncMock';
import Categories from "../Categories/Categories";
import ItemList from "../ItemList/ItemList";

const Div =styled.div`
  width: 100%;
  min-height: calc(100vh - (100px + 60px));//100px = header y 60px = footer
  display: flex;
  flex-direction: row;
`;

const DivCategories = styled.div`
  width: 15em;
  background-color: ${colors.secondary};
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;
const DivProducts = styled.div`
  width: 100%;
`;

const H2 = styled.h2`
  color: ${colors.color};
  font-weight: 500;
  padding: 5px 30px;
  border-bottom: 4px solid red;
  border-radius: 5px;
`;

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()

  useEffect(() => {
    const fetching = async () => {
      const asynFunc = categoryId ? getProductsByCategory : getProducts;
      try {
        setProducts(await asynFunc(categoryId));
      } catch (err) {
        console.log(err);
      };
    };
    fetching();
  }, [categoryId]);

  return (
    <Div>
      <DivCategories>
        <H2>Filtrar</H2>
        <Link to={`/products/category/remeras`}>
          <Categories content={'Remeras'}/>
        </Link>
        <Link to={`/products/category/buzos`}>
          <Categories content={'Buzos'}/>
        </Link>
        <Link to={`/products/category/zapatillas`}>
          <Categories content={'Zapatillas'}/>
        </Link>
      </DivCategories>
      <DivProducts>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
      </DivProducts>
    </Div>
  );
};

export default ItemListContainer;