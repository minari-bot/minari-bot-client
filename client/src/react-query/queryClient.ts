import { QueryCache, QueryClient } from '@tanstack/react-query';


function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : 'error connecting to server';
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onError: queryErrorHandler,
  }),
});