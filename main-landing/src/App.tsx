import { Flex, Box, Container, Heading } from "@chakra-ui/react";

const bgImgURL = "/images/footballer.jpg";

function App() {
  return (
    <Box
      bgImage={bgImgURL}
      minHeight="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      <Box as="header" bgColor="#ffffff">
        <Container maxW="1200px" margin="0 auto">
          <Flex h="110px" alignItems="center">
            <Heading size="lg">Space Football</Heading>
          </Flex>
        </Container>
      </Box>
      <Box as="main">
        <Container maxW="1200px" margin="0 auto">
          <Flex
            h="calc(100vh - 110px)"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Box
              fontSize="72px"
              marginBottom="54px"
              fontWeight="bold"
              color="#ffffff"
            >
              Professionals rely on numbers!
            </Box>
            <Box color="#ffffff" fontSize="46px">
              All in one statistical solution
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box h="800px" bgColor="#ffffff"></Box>
    </Box>
  );
}

export default App;
