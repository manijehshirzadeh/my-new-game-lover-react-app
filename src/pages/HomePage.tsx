import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react"
import GenreList from "../components/GenreList"
import GamesList from "../components/GamesList"
import GameHeading from "../components/GameHeading"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

const HomePage = () => {
	console.log("this is home page")
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`
			}}
			templateColumns={{
				base: "1fr",
				lg: "250px 1fr"
			}}
		>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading />
					<Flex marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector />
						</Box>
						<SortSelector />
					</Flex>
				</Box>
				<GamesList />
			</GridItem>
		</Grid>
	)
}

export default HomePage
