import { httpClient } from "./client";

export const swrFetcher = async <T>(endpoint: string): Promise<T> => {
  return httpClient<T>({ endpoint });
};

export const swrMutator = async <T>(
  endpoint: string,
  { arg }: { arg: unknown }
): Promise<T> => {
  return httpClient<T>({
    endpoint,
    method: 'POST',
    body: arg
  });
};