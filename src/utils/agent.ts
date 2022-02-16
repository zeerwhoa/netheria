import { API_PREFIX } from "@/constant";

// Updates the agent input field to account for any
// shared configuration settings, including the base URL.
const getAgentInput = (input: RequestInfo): RequestInfo => {
  let formattedInput;

  if (typeof input === "string") {
    formattedInput = `${API_PREFIX}/${input}`;
  } else {
    formattedInput = { ...input, url: `${API_PREFIX}/${input.url}` };
  }

  return formattedInput;
};

// Fetches data remotely.
const agent = (
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> => {
  return fetch(getAgentInput(input), init);
};

export default agent;
