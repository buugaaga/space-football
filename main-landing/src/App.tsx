import { Flex, Box, Container, Heading } from "@chakra-ui/react";

const bgImgURL = "/images/corner.jpg";

function App() {
  return (
    <Box
      bgImage={bgImgURL}
      minHeight="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
    >
      <Box as="header" bgColor="#ffffff">
        <Container maxW="1200px" margin="0 auto">
          <Flex h="110px" alignItems="center">
            <Heading size="lg">Space Football</Heading>
          </Flex>
        </Container>
      </Box>
      <Box
        h="1200px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="lg" color="#ffffff">
          Space Football
        </Heading>
      </Box>
      <Box h="800px" bgColor="#ffffff"></Box>
    </Box>
  );
}

export default App;
