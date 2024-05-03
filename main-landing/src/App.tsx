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
        <Container maxW="1200px">
          <Flex h="110px" alignItems="center">
            <Heading size="lg">Space Football</Heading>
          </Flex>
        </Container>
      </Box>
      <Box as="main">
        <Container maxW="1200px">
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
          <Container maxW="1200px">
            <Flex h="720px" py="90px" justify="center" align="center">
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
          <Container maxW="760px" h="1280px" py="150px">
            <Box fontSize="72px" fontWeight="bold" textAlign="center" mb="72px">
              Who we are?
            </Box>
            <Box fontSize="20px" mb="54px">
              SportsBase is a new digital project dedicated to set up a football
              analytics and video analysis system. The company provides a wide
              range of services covering all possible customer requests,
              including a video platform, statistical post-match reports, live
              breakdown with the minimal delay, raw data, player fitness
              tracking reports, and analytical player reports.
            </Box>
            <Box fontSize="26px" fontWeight="bold" mb="36px">
              OUR MISSION
            </Box>
            <Box fontSize="20px" mb="54px">
              We aim at developing football with the contemporary IT solutions
              using machine learning, neural networks, customized and
              user-friendly software which will facilitate the work for coaches,
              analysts as well as journalists and commentators. The SportsBase
              services are fully customizable, so all the users will manage to
              find what they need.
            </Box>
            <Box fontSize="26px" fontWeight="bold" mb="36px">
              OUR QUALITY
            </Box>
            <Box fontSize="20px" mb="54px">
              More than 200 experienced ex-InStat employess, own independent
              production department, own methodology of full Live analysis.
            </Box>
            <Box fontSize="26px" fontWeight="bold" mb="36px">
              RELIABILITY
            </Box>
            <Box fontSize="20px" mb="54px">
              SportsBase is a well-structured company with over 200 people in
              staff all around the world.
            </Box>
          </Container>
        </Box>
        <Box bgColor="#f5f5f5">
          <Container maxW="1200px" h="3300px" pt="135px" pb="165px"></Container>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
