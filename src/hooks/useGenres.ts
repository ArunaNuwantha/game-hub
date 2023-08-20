import { useQuery } from "@tanstack/react-query";
import initialGenres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data) || []
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: initialGenres.length, results: initialGenres }
  });
}

export default useGenres;