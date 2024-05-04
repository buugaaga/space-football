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
          <Container maxW="1200px" h="3300px" pt="135px" pb="165px">
            <Flex direction="column" gap="50px">
              <Flex justify="space-between" align="center">
                <Box as="img" src="/images/1.png" maxW="48%"></Box>
                <Box>
                  <Box fontSize="26px" fontWeight="bold" mb="24px">
                    SPORTSBASE SOLUTIONS
                  </Box>
                  <Box mb="36px" fontSize="18px">
                    <p>• SportsBase football video platform;</p>
                    <p>• Technical match filming;</p>
                    <p>• Video and advanced statistics;</p>
                    <p>• Detailed post-match reports;</p>
                    <p>• Statistical live data collection;</p>
                    <p>• Player fitness tracking reports;</p>
                    <p>• Raw data delivered in live mode.</p>
                  </Box>
                  <Box fontSize="18px">
                    Services to be launched in the short term:
                    <p>• 24/7 technical support;</p>
                    <p>• Live fitness tracking;</p>
                    <p>• Analytical opponent’s prescout reports;</p>
                    <p>• Post-match referee reports;</p>
                    <p>• Offline and online tagging software.</p>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Box fontSize="26px" fontWeight="bold" mb="24px">
                    SPORTSBASE PLATFORM FOR COACHES
                  </Box>
                  <Box fontSize="18px">
                    <p>• Video breakdown of own and opponent’s matches;</p>
                    <p>
                      • Various options to review a match: full match video,
                      ball-in-play mode, and highlights;
                    </p>
                    <p>
                      • Several video tracks available for a review: TV streams
                      or technical footage;
                    </p>
                    <p>
                      • Video player with the option to accelerate the video
                      speed;
                    </p>
                    <p>
                      • Quick video download with the 1080p or 720p resolution;
                    </p>
                    <p>• Customizable statistical spreadsheets.</p>
                  </Box>
                </Box>
                <Box as="img" src="/images/2.png" maxW="48%"></Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box as="img" src="/images/3.png" maxW="48%"></Box>
                <Box pl="100px">
                  <Box fontSize="26px" fontWeight="bold" mb="24px">
                    SPORTSBASE PLATFORM FOR PLAYER RECRUITMENT
                  </Box>
                  <Box fontSize="18px">
                    <p>
                      • Filter players by their statistics to find the best
                      candidates;
                    </p>
                    <p>• Quick access to review all player actions;</p>
                    <p>
                      • Watch statistical metrics that are linked to the video;
                    </p>
                    <p>
                      • Share any video in two clicks with your team via email.
                    </p>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Box fontSize="26px" fontWeight="bold" mb="24px">
                    STATISTICAL REPORTS
                  </Box>
                  <Box fontSize="18px">
                    <p>• Real-time statistical match analysis;</p>
                    <p>• Statistical post-match team and player report;</p>
                    <p>• Team and tournament summary reports;</p>
                    <p>• New advanced metrics developed;</p>
                    <p>• Data quality control.</p>
                  </Box>
                </Box>
                <Box as="img" src="/images/4.png" maxW="48%"></Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box as="img" src="/images/5-1.png" maxW="48%"></Box>
                <Box>
                  <Box fontSize="26px" fontWeight="bold" mb="24px">
                    PLAYER FITNESS TRACKING REPORTS
                  </Box>
                  <Box fontSize="18px">
                    <p>
                      • Fitness tracking data about your own team as well as the
                      opponents;
                    </p>
                    <p>
                      • Speed and covered distance metrics available for each
                      player;
                    </p>
                    <p>
                      • Player position charts showing the team gaps in offense
                      and defense;
                    </p>
                    <p>• New metrics combining event and fitness data;</p>
                    <p>• Proven data collection methodology.</p>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box pr="50px">
                  <Box fontSize="26px" fontWeight="bold" mb="24px">
                    RAW DATA
                  </Box>
                  <Box fontSize="18px">
                    <p>• Over 2500 metrics;</p>
                    <p>• Data available in XML and JSON formats;</p>
                    <p>
                      • Tailor-made assistance and guidance on how to use the
                      data for a website or on social media.
                    </p>
                  </Box>
                </Box>
                <Box as="img" src="/images/5-2.png" maxW="48%"></Box>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
