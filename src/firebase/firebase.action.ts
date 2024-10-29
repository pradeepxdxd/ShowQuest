import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";
import { User as UserAuth } from "firebase/auth";

interface User {
  email: string;
  name?: string;
}

interface UserWithProp extends UserAuth {
  id: string;
  email: string;
  name: string;
  photo: string;
}

export const addUser = async (user: User) => {
  if (!db) {
    console.error("Firestore is not initialized");
    return;
  }

  try {
    // check the email is exist or not
    const existantUser = (await getUserByEmail(
      user.email
    )) as unknown as UserWithProp[];
    console.log({ existantUser });
    if (existantUser && existantUser.length > 0) {
      if (existantUser[0]?.email === user.email) {
        return existantUser[0].id;
      }
    }

    // add user
    const docRef = await addDoc(collection(db, "auth"), {
      email: user.email,
      name: user?.name,
      createdAt: new Date(),
    });
    return docRef.id;
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

export const addGoogleUser = async (user: UserAuth) => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }
  try {
    const userRef = doc(db, "auth", user.uid);
    const userSpan = await getDoc(userRef);

    if (!userSpan.exists()) {
      const userCreated = await setDoc(userRef, {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        createdAt: new Date(),
      });
      return userCreated;
    } else {
      return userSpan.data();
    }
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

export const updateUser = async (userId: string, data: Partial<User>) => {
  if (!db) {
    console.log("Firebase is not initialized");
    return;
  }

  try {
    const userDoc = doc(db, "auth", userId);
    const resp = await updateDoc(userDoc, data);
    return resp;
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
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
      return { id, ...userSnapshot.data() };
    } else return null;
  } catch (err) {
    if (err instanceof Error) {
      console.log({ firebaseErr: err.message });
    } else {
      console.log({ firebaseErr: "An unknown error occurred" });
    }
  }
};
