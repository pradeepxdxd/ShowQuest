import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

interface User {
  email: string;
  name?: string;
}

export const addUser = async (user: User) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "auth"), {
      email: user.email,
      name: user?.name,
    });
    return docRef.id;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
  }
};

export const getUserByEmail = async (email: string) => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }

  try {
    const userCollection = collection(db, "auth");
    const q = query(userCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    const userList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return userList.length > 0 ? userList : null;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
  }
};

export const updateUser = async (userId: string, data: Partial<User>) => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }

  try {
    const userDoc = doc(db, "auth", userId);
    const resp = await updateDoc(userDoc, data);
    console.log({resp})
    return resp;
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
  }
};
