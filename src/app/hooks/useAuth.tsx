import { auth } from "@/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { getCookie } from "@/app/server/cookie";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/app/store/auth/auth.slice";
import { verifyJoseToken } from "../lib/jose.auth";

const useAuth = () => {
  const [user] = useAuthState(auth);

  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const cookie = await getCookie("token");
        const result = await verifyJoseToken(cookie?.value as string)
        if (result) {
          dispatch(setToken(cookie?.value));
        }
      } catch (error) {
        dispatch(setToken(undefined));
        console.log(error);
      }
    };

    fetchToken();
  }, []);
  return user || token;
};

export default useAuth;
