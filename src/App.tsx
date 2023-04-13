import { Box, ChakraProvider, Grid, Text, theme, VStack } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>This is a silly little example script.</Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
