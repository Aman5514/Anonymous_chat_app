import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import Picker from "emoji-picker-react";
import { IoSendOutline } from "react-icons/io5";
import { IconButton } from "@chakra-ui/react";
import "./ChatInput.scss";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += event.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="chat_input_container">
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <IconButton
          variant="solid"
          colorScheme="teal"
          aria-label="Call Sage"
          isRound
          size="sm"
          icon={<IoSendOutline />}
        />
      </form>
    </div>
  );
}
