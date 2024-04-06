import { Flex, Text } from "@chakra-ui/react";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import { FC } from "react";

export const Navbar: FC = () => {
  const userFriendlyAddress = useTonAddress();
  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems={"center"}
      h={{ base: "80px", md: "100px" }}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      backgroundColor={"gray.700"}
      color={"gray.100"}
      mb={{ base: 4, md: 10 }}
    >
      <Text>Space Football</Text>
      <Flex gap={4}>
        {userFriendlyAddress ? (
          <Text>{userFriendlyAddress}</Text>
        ) : (
          <TonConnectButton />
        )}
      </Flex>
    </Flex>
  );
};
