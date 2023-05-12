import styled from "styled-components";
import { colors } from "../../theme";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../config/firebase";

import Categories from "../Categories/Categories";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const Div = styled.div`
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

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams()

  useEffect(() => {
    const fetching = async () => {
      const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products');
      const productsFromDb = await getDocs(collectionRef);
      try {
        const productsAdapted = productsFromDb.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      } catch (err) {
        console.error(err);
      };
      setLoading(false);
    };
    fetching();
  }, [categoryId]);

  return (
    <Div>
      <DivCategories>
        <H2>Filtrar</H2>
        <Link to={`/products/category/remeras`}>
          <Categories content={'Remeras'} />
        </Link>
        <Link to={`/products/category/buzos`}>
          <Categories content={'Buzos'} />
        </Link>
        <Link to={`/products/category/zapatillas`}>
          <Categories content={'Zapatillas'} />
        </Link>
      </DivCategories>
      <DivProducts>
        <h1>{greeting}</h1>
        {loading ? <Loading /> : <ItemList products={products} />}
      </DivProducts>
    </Div>
  );
};

export default ItemListContainer;