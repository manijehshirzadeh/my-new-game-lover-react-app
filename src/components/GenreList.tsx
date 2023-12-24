import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text
} from "@chakra-ui/react"
import useGenres from "../customHooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"

const GenreList = () => {
	const { data, isLoading, error } = useGenres()

	const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
	const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

	if (error) return null

	if (isLoading) return <Spinner />

	return (
		<>
			<Heading fontSize="2xl" marginTop={9} marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map(genre => (
					<ListItem key={genre.id} paddingY="5px">
						<Button
							width="200px"
							whiteSpace="normal"
							fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
							onClick={() => setSelectedGenreId(genre.id)}
							fontSize="md"
							variant={genre.id === selectedGenreId ? "outline" : "ghost"}
						>
							<HStack width={"100%"} display={"flex"} flexDirection={"row"}>
								<Image
									boxSize="32px"
									borderRadius={8}
									objectFit="cover"
									src={getCroppedImageUrl(genre.image_background)}
								/>
								<Text>{genre.name}</Text>
							</HStack>
						</Button>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GenreList
