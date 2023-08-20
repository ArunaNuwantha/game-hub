import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_PLATFORMS_KEY } from "../constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_PLATFORMS_KEY,
    queryFn: () => {
      return apiClient.get<FetchResponse<Platform>>("/platforms/list/parent").then(res => res.data)
    },
    initialData: { count: platforms.length, results: platforms }
  })
};

export default usePlatforms;
