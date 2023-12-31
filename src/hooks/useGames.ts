import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../store";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => {
      return apiClient
        .getAll(
          {
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam
            }
          })
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  });

export default useGames;
