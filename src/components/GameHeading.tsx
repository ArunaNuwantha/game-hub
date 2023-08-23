import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const selectedGenre = useGenres().data.results.find(
    (genre) => genre.id === gameQuery.genreId
  );

  const selectedPlatform = usePlatforms().data.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
