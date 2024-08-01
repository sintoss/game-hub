import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "@core";
import {GameGrid} from "./core";
import GenreList from "./core/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./core/components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelector from "./core/components/SortSelector.tsx";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}


function App() {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <Grid templateAreas={{
            base: '"nav nav" "main"',
            lg: '"nav nav" "aside main"',
        }}
              templateColumns={{
                  base: '1fr',
                  lg: "200px 1fr"
              }}
        >
            <GridItem area="nav">
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingY={5}>
                    <GenreList selectedGenre={gameQuery.genre}
                               onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Flex paddingLeft={2} marginBottom={5}>
                    <Box marginRight={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                    </Box>
                    <SortSelector sortOrder={gameQuery.sortOrder}
                                  onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>

                </Flex>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>

        </Grid>

    )
}

export default App
