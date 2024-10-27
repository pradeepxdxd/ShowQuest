import { useCallback } from "react";

export default function useOperationDelay<T>() {
  const operationHandler = useCallback(
    (timer: number, fn: (payload: T) => void, payload: T) => {
      setTimeout(() => fn(payload), timer);
    },
    []
  );
  return { operationHandler };
}
