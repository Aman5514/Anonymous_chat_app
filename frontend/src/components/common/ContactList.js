import {
  Avatar,
  AvatarBadge,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import ContactUser from "./ContactUser";
const ContactList = () => {
  return (
    <Flex flexDirection="column" gap={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FiSearch />} />
        <Input borderRadius={12} type="text" placeholder="Search" />
      </InputGroup>
      <VStack
        height="calc(100vh - 250px)"
        overflowY="scroll"
        spacing={2}
        align="stretch"
      >
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
        <ContactUser />
      </VStack>
    </Flex>
  );
};

export default ContactList;
