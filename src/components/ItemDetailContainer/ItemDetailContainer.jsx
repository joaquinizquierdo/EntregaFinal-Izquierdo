import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams()

  useEffect (() => {
    const fetching = async (id) => {
      try {
        setProduct(await getProductById(id));
      } catch (err) {
        console.log(err);
      };
    };
    fetching(itemId);
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  );
};

export default ItemDetailContainer;