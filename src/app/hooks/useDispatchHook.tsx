import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

export default function useDispatchHook<T>(fn: (arg: T) => never) {
  const dispatch = useDispatch<AppDispatch>();

  const handler = useCallback(
    (payload: T) => {
      dispatch(fn(payload));
    },
    [dispatch, fn]
  );

  return handler;
}
