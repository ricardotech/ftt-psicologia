import {
  Flex,
  Icon,
  Text,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "../../utils/useMediaQuery";

import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import Drawer from "./Drawer";

export default function Header({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { signOut } = useAuth();
  const { mobile, tablet, desktop } = useMediaQuery();

  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Flex
      justify="space-between"
      w="100%"
      px="4"
      left={mobile ? 0 : 300}
      style={{
        width: mobile ? "100%" : "calc(100vw - 300px)",
        height: 70,
      }}
      align="center"
      position="fixed"
      bg="#FFF"
      // boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 2px"
      borderBottom="1px solid #EEE"
    >
      <Flex align="center">
        <Text color="#333" fontSize="1.4rem">
          Psicare
        </Text>
      </Flex>
      {!mobile && <Button mt={0.1} px={6} label="Sair" onPress={signOut} />}
      {mobile && (
        <Icon
          cursor="pointer"
          onClick={() => setSidebarOpened(true)}
          as={BiMenuAltRight}
          color="#C760EB"
          fontSize="2rem"
        />
      )}
      <Drawer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpened={sidebarOpened}
        setSidebarOpened={setSidebarOpened}
      />
    </Flex>
  );
}
