import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react"
import GenreList from "../components/GenreList"
import GamesList from "../components/GamesList"

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
					Game Heading goes here
					<Flex marginBottom={5}>
						<Box marginRight={5}>Platform Selector goes here</Box>
						Sort Selector goes here
					</Flex>
				</Box>
				<GamesList />
			</GridItem>
		</Grid>
	)
}

export default HomePage
