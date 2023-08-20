import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_PLATFORMS_KEY } from "../constants";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/list/parent")

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_PLATFORMS_KEY,
    queryFn: apiClient.getAll,
    initialData: { count: platforms.length, results: platforms, next: null }
  })
};

export default usePlatforms;
