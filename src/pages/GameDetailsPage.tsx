import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../core/components/ExpandableText.tsx";
import GameAttributes from "../core/components/GameAttributes.tsx";
import GameTrailer from "../core/components/GameTrailer.tsx";
import GameScreenshot from "../core/components/GameScreenshot.tsx";

const GameDetailsPage = () => {

    const {slug} = useParams();

    const {data: game, error, isLoading} = useGame(slug!);

    if (isLoading) return <Spinner/>;
    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game}/>
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id}/>
                <GameScreenshot gameId={game.id}/>
            </GridItem>
        </SimpleGrid>

    )

};

export default GameDetailsPage;