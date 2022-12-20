import React, { useState, useEffect } from "react";
import "./Chat.css";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import io from "socket.io-client";
import InputEmoji from "react-input-emoji";
import { IoSendOutline } from "react-icons/io5";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const [room, setRoom] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <Flex flexDirection="column" gap={1.5}>
      <Flex gap={3} alignItems="center">
        <Avatar
          size="md"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        >
          <AvatarBadge boxSize="20px" bg="green.500" />
        </Avatar>
        <Flex flexDirection="column">
          <Text fontSize="sm">Ryan Florence</Text>
          <Text fontSize="xs">online</Text>
        </Flex>
      </Flex>
      {/* <div>
        <Input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <Button olorScheme="teal" variant="solid" onClick={joinRoom}>
          Join Room
        </Button>
      </div> */}
      <Box
        h="calc(100vh - 300px)"
        bg="gray.200"
        borderRadius={12}
        overflowY="scroll"
      ></Box>
      <Flex alignItems="center" gap={2}>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          borderRadius={16}
          onEnter={sendMessage}
          placeholder="Type a message"
        />

        <IconButton
          variant="solid"
          colorScheme="teal"
          aria-label="Call Sage"
          isRound
          size="sm"
          icon={<IoSendOutline />}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
