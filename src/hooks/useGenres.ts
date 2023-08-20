import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import initialGenres from "../data/genres";

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