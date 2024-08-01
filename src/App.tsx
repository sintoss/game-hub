import {Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "@core";
import {GameGrid} from "./core";
import GenreList from "./core/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";

function App() {


    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
                    <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid selectedGenre={selectedGenre}/>
            </GridItem>

        </Grid>

    )
}

export default App
