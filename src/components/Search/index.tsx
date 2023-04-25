import React from "react";

import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useMediaQuery } from "../../utils/useMediaQuery";

export default function Search() {
  const { mobile } = useMediaQuery();

  return (
    <Flex
      style={{
        height: 40,
      }}
      w={mobile ? "100%" : 400}
      px="4"
      border="1px solid #D5B8FF"
      align="center"
      borderRadius="10"
    >
      <Icon as={BiSearch} color="#710198" fontSize="1rem" />
      <Input
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        autoFocus
        w="100%"
        _focus={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        _active={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        _hover={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        style={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        border="0px solid !important"
      />
    </Flex>
  );
}
