import useGenres from "../../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../../store.ts";


const GenreList = () => {

    const {data, error, isLoading} = useGenres();

    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

    if (isLoading) return <Spinner/>;
    if (error) return null;

    return (
        <>
            <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontSize="md"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
