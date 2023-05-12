import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import db from "../../config/firebase";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams()

  // useEffect (() => {
  //   const fetching = async (id) => {
  //     try {
  //       setProduct(await getProductById(id));
  //     } catch (err) {
  //       console.log(err);
  //     };
  //   };
  //   fetching(itemId);
  // }, [itemId]);


  useEffect(() => {
    const fetching = async (id) => {
      try {
        const docRef = doc(db, 'products', id);
        const productFromDb = await getDoc(docRef);
        const data = productFromDb.data();
        const productAdapted = { id: productFromDb.id, ...data }
        setProduct(productAdapted);
      } catch (err) {
        console.log(err);
      };
      setLoading(false);
    };
    fetching(itemId);
  }, [itemId]);




  return (
    <div>
      {loading ? <Loading/> : <ItemDetail {...product}/>}
      {/* <ItemDetail {...product} /> */}
    </div>
  );
};

export default ItemDetailContainer;