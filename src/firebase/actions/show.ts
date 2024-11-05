import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  // orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Show, ShowResponse } from "./action.types";
import { FIREBASE_SHOW_COLLECTION } from "@/app/constants/constant";

export const addShow = async (show: Show) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, FIREBASE_SHOW_COLLECTION), {
      ...show,
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

export const getShowByType = async (type: string) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const showCollection = collection(db, FIREBASE_SHOW_COLLECTION);
    const q = query(
      showCollection,
      where("type", "==", type)
      // orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs && querySnapshot.docs.length > 0) {
      const showList = querySnapshot.docs.map(
        (show) =>
          ({
            id: show.id,
            ...show.data(),
          } as ShowResponse)
      );

      return showList as ShowResponse[];
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

export const deleteShow = async (id: string) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const docRef = doc(db, FIREBASE_SHOW_COLLECTION, id);
    if (docRef) {
      await deleteDoc(docRef);
      return id;
    } else throw new Error("Show not found.");
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

export const updateShow = async (id: string, data: Partial<Show>) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const showRef = doc(db, FIREBASE_SHOW_COLLECTION, id);
    await updateDoc(showRef, data);

    // Fetch the updated document
    const updatedDoc = await getDoc(showRef);
    if (updatedDoc.exists()) {
      return {
        id: updatedDoc.id,
        ...updatedDoc.data(),
      } as unknown as ShowResponse;
    } else {
      throw new Error("Show not found.");
    }
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

export const getShowById = async (id: string) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }
  try {
    const docRef = doc(db, FIREBASE_SHOW_COLLECTION, id);
    const showSnapShot = await getDoc(docRef);
    if (showSnapShot.exists()) {
      return { id: showSnapShot.id, ...showSnapShot.data() };
    } else throw new Error("Show not found");
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
