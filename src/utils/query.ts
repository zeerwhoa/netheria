import { QueryClient } from "react-query";

// Initializes the React query client with a standardized
// set of options.
const setupQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 120000,
      },
    },
  });
};

export { setupQueryClient };
