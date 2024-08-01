import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import useGames, {Platform} from "../../hooks/useGames.ts";
import {Genre} from "../../hooks/useGenres.ts";
import {GameQuery} from "../../App.tsx";

interface Props {

    gameQuery: GameQuery;
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

export function GameGrid({gameQuery}: Props) {

    const {data, error, isLoading} = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding='10px' spacing={3}>
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

