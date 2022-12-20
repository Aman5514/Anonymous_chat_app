import {
  Avatar,
  AvatarBadge,
  Flex,
  IconButton,
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
import { MdPersonAddAlt1 } from "react-icons/md";
const ContactList = () => {
  return (
    <Flex flexDirection="column" gap={4}>
      <Flex gap={2} >
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FiSearch />} />
          <Input borderRadius={12} type="text" placeholder="Search" />
        </InputGroup>
        <IconButton
          variant="outline"
          aria-label="Call Sage"
          fontSize="20px"
          isRound
          icon={<MdPersonAddAlt1 />}
        />
      </Flex>
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
