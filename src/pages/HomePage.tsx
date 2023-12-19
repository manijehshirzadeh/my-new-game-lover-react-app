import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Genre List goes here
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
        Game Grid goes here
      </GridItem>
    </Grid>
  );
};

export default HomePage;
