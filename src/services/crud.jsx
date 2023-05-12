import db from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export const sendOrder = async (order) => {
  const collectionRef = collection(db, 'orders');

  await addDoc(collectionRef, order);
};