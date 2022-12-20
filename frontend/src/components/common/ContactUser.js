import { Avatar, AvatarBadge, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ContactUser = () => {
  return (
    <Flex
      h="55px"
      border="1px"
      borderColor="transparent"
      px={2}
      py={2}
      style={{
        marginRight: "5px",
      }}
      alignItems="center"
      borderRadius={12}
      gap={2}
      _hover={{
        border: "1px",
        borderColor: "gray.300",
        cursor: "pointer",
      }}
    >
      <Avatar
        size="sm"
        name="Ryan Florence"
        // src="https://bit.ly/ryan-florence"
      >
        <AvatarBadge boxSize="14px" bg="green.500" />
      </Avatar>
      <Flex h="100%" flexDirection="column">
        <Text fontSize="2xs">Ryan Florence</Text>
        <Text w="85%" noOfLines={1} fontSize="3xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          maiores quaerat possimus vitae nulla vero explicabo iusto facilis in
          repellat soluta illo ipsum, nam odio rem aspernatur odit officia ipsa?
        </Text>
      </Flex>
      <Flex h="100%" flexDirection="column">
        <Text mt="2px" fontSize="10px">
          Today
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContactUser;
