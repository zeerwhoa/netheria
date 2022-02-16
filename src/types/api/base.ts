import { QueryObserverBaseResult } from "react-query";

type QueryResult<T> = QueryObserverBaseResult<T | undefined, Error | null>;
type SimpleQueryResult<T> = {
  data: T;
  dataUpdatedAt?: number;
  isLoading: boolean;
  error: Error | null;
};

export type { QueryResult, SimpleQueryResult };
