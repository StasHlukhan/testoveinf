import { useState } from "react";

type CallbackType = (...args: any[]) => Promise<void>;

type UseFetchingReturnType = [
  (args?: any) => Promise<void>,
  boolean,
  string
];

const useFetching = (callback: CallbackType): UseFetchingReturnType => {
    
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async (...args: any[]): Promise<void> => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e:any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;
