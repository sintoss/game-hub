import {Game} from "../../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import {Link} from "react-router-dom";

interface Props {
    game: Game;
}

function GameCard({game}: Props) {
    return (

        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack marginBottom={3} justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={"games/" + game.slug}>
                        {game.name}
                    </Link>
                    <Emoji rating={game.rating_top}/>
                </Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;
