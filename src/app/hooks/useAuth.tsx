import { useEffect } from "react";
import { getCookie } from "@/app/server/cookie";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/app/store/auth/auth.slice";
import { verifyJoseToken } from "../lib/jose.auth";

const useAuth = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const cookie = await getCookie("token");
        const result = await verifyJoseToken(cookie?.value as string);
        if (result) {
          dispatch(setToken(cookie?.value));
        }
        else {
          dispatch(setToken(null));
        }
      } catch (error) {
        dispatch(setToken(''));
        console.log(error);
      }
    };

    fetchToken();
  }, [dispatch]);

  return token ? token : null;
};

export default useAuth;
