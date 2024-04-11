import { Flex, Text } from "@chakra-ui/react";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import { FC } from "react";

const formatAddress = (address: string) => {
  return address.slice(0, 4) + "..." + address.slice(-4);
};

export const Navbar: FC = () => {
  const userFriendlyAddress = useTonAddress();

  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems={"center"}
      h={{ base: "130px" }}
      px={{ base: 8 }}
      backgroundColor={"gray.700"}
      color={"gray.100"}
      pb={{ base: 12 }}
    >
      <Text>Space Football</Text>
      <Flex gap={4}>
        {userFriendlyAddress ? (
          <Text>{formatAddress(userFriendlyAddress)}</Text>
        ) : (
          <TonConnectButton />
        )}
      </Flex>
    </Flex>
  );
};
