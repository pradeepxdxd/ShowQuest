import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit"; // Adjust import based on your Redux setup

export default function useDispatchHook<T>() {
  const dispatch = useDispatch<AppDispatch>();

  const handler = useCallback(
    (fn: ActionCreatorWithPayload<T>, payload: T) => {
      dispatch(fn(payload));
    },
    [dispatch]
  );

  return { handler };
}
