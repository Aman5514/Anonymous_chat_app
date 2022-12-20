import { Box, Center, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { RiShieldStarFill } from "react-icons/ri";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <HStack spacing="24px" h="60px" px="25px" wrap="wrap">
      <Center gap={1}>
        <FaRegCopyright size={18} />
        <Text fontSize="xs">2022 Droid Laboratory - All rights reserved</Text>
      </Center>
      <Spacer />
      <Center gap={1}>
        <Text fontSize="xs">Made by Aman Gupta</Text>
        <RiShieldStarFill color="#DAA520" />
      </Center>
      <Center gap={4}>
        <Text fontSize="xs">Follow me</Text>
        <Center
          _hover={{
            color: "black",
          }}
        >
          <VscGithub />
        </Center>
        <Center
          _hover={{
            color: "#8a3ab9",
          }}
        >
          <BsInstagram />
        </Center>
        <Center
          _hover={{
            color: "#3b5998",
          }}
        >
          <BsFacebook />
        </Center>
        <Center
          _hover={{
            color: "#1d9bf0",
          }}
        >
          <BsTwitter />
        </Center>
      </Center>
    </HStack>
  );
};

export default Footer;
