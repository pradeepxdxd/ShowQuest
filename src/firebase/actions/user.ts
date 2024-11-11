import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  // setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { User as UserAuth } from "firebase/auth";
import { ResponseUser, Role } from "./action.types";

interface User {
  email: string;
  name?: string;
}

export interface UserWithProp extends UserAuth {
  id?: string;
  email: string;
  name: string;
  photo?: string;
  role: Role;
}

export const addUser = async (
  user: User
): Promise<ResponseUser | null | void> => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    // check the email is exist or not
    const existantUser = (await getUserByEmail(
      user.email
    )) as unknown as UserWithProp[];
    if (existantUser && existantUser.length > 0) {
      if (existantUser[0]?.email === user.email) {
        return {
          id: existantUser[0]?.id,
          name: existantUser[0]?.name,
          role: existantUser[0]?.role,
          photo: existantUser[0]?.photo,
          email: existantUser[0]?.email,
        };
      }
    }

    // add user
    const docRef = await addDoc(collection(db, "auth"), {
      email: user.email,
      name: user?.name,
      role: "USER",
      createdAt: new Date().toString(),
    });
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()) {
      return {
        id: docSnapShot.id,
        ...docSnapShot.data(),
      } as ResponseUser;
    } else return null;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
      throw new Error(err?.message);
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
      throw new Error("Something went wrong, firebase error");
    }
  }
};

export const addGoogleUser = async (
  user: UserAuth
): Promise<ResponseUser | void> => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }
  try {
    // check the email is exist or not
    const existantUser = (await getUserByEmail(
      user.email as string
    )) as unknown as UserWithProp[];
    if (existantUser && existantUser.length > 0) {
      if (existantUser[0]?.email === user.email) {
        return {
          id: existantUser[0]?.id,
          name: existantUser[0]?.name,
          role: existantUser[0]?.role,
          photo: existantUser[0]?.photo,
          email: existantUser[0]?.email,
        };
      }
    }

    const docRef = await addDoc(collection(db, "auth"), {
      email: user.email,
      name: user?.displayName,
      role: "USER",
      photo: user.photoURL,
      createdAt: new Date().toString(),
    });
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()) {
      return {
        id: docSnapShot.id,
        ...docSnapShot.data(),
      } as ResponseUser;
    } else throw new Error("User not created, firebase server error");
  } catch (err) {
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

export const updateUser = async (
  userId: string,
  data: Partial<UserWithProp>
) => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }

  try {
    const userDoc = doc(db, "auth", userId);
    await updateDoc(userDoc, data);
    return true;
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
    return false;
  }
};

export const getUserById = async (id: string) => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }

  try {
    const userRef = doc(db, "auth", id);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return { id, ...userSnapshot.data() } as ResponseUser;
    } else return null;
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
  }
};
