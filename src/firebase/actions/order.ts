import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Order, OrderLists } from "./action.types";

export const addOrder = async (order: Order) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "order"), {
      ...order,
      createdAt: new Date().toString(),
    });
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()) {
      return {
        id: docSnapShot.id,
        ...docSnapShot.data(),
      };
    } else throw new Error("Something went wrong, while saving order.");
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
      throw new Error(err?.message);
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
      throw new Error("Something went wrong, firebase error");
    }
  }
};

export const getOrderOfUser = async (id: string) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const orderCollection = collection(db, "order");
    const q = query(orderCollection, where("userId", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      const orderList = querySnapshot.docs.map(
        (ord) =>
          ({
            id: ord.id,
            ...ord.data(),
          } as OrderLists)
      );
      return orderList as OrderLists[];
    } else return [];
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
      throw new Error(err?.message);
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
      throw new Error("Something went wrong, firebase error");
    }
  }
};
