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
      <Box as="header" bgColor="white">
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
              color="white"
            >
              Professionals rely on numbers!
            </Box>
            <Box color="white" fontSize="46px">
              All in one statistical solution
            </Box>
          </Flex>
        </Container>
        <Box bgColor="white">
          <Container maxW="1200px" margin="0 auto" bgColor="white">
            <Flex h="720px" pt="90px" pb="90px" justify="center" align="center">
              <iframe
                width="960"
                height="540"
                src="https://www.youtube.com/embed/g_ERlr_Y_H8?si=hKA0RF3XLSharIKX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
