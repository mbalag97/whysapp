import {
  SearchBoxContainerComponent,
  SearchInput,
} from "../ContactListComponent/contactListComponent";
import { ProfileIcon } from "../ContactListItemComponent/ContactListitem";
import {
  ChatBox,
  Container,
  EmojiImage,
  Message,
  MessageContainer,
  MessageDiv,
  ProfileHeader,
} from "./conversationComponent";
import { MESSAGE_LIST } from "../../mockdata";
import Picker from "emoji-picker-react";
import { useState } from "react";
const ConversationalComponent = (props) => {
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [messageList, setMessageList] = useState(MESSAGE_LIST);
  const handleEmojiIconClick = (event) => {
    event.preventDefault();
    setEmojiPickerVisible((prev) => !prev);
  };
  const handleTextChange = (event) => {
    event.preventDefault();
    setEmojiPickerVisible(false);
    console.log(event.target.value);
    setText(event.target.value);
  };
  const handleInputFocus = (event) => {
    event.preventDefault();
    setEmojiPickerVisible(false);
  };
  const onEmojiClick = (event, emojiObj) => {
    event.preventDefault();
    setText(text + " " + emojiObj.emoji);
    setEmojiPickerVisible(false);
  };
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      const copyMessageList = [...messageList];
      copyMessageList.push({
        id: "01",
        messageType: "TEXT",
        text: text,
        senderId: 0,
        addedOn: "12:02 PM",
      });
      setMessageList(copyMessageList);
      setText("");
    }
  };
  return (
    <Container>
      <ProfileHeader>
        <ProfileIcon src={process.env.PUBLIC_URL + selectedChat.profileImg} />
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {messageList.map((message, index) => {
          return (
            <MessageDiv key={index} isYours={message.senderId === 0}>
              <Message isYours={message.senderId === 0}>{message.text}</Message>
            </MessageDiv>
          );
        })}
      </MessageContainer>
      <ChatBox>
        <SearchBoxContainerComponent>
          {emojiPickerVisible && (
            <Picker
              pickerStyle={{ position: "absolute", bottom: "60px" }}
              onEmojiClick={onEmojiClick}
            />
          )}
          <EmojiImage
            src={process.env.PUBLIC_URL + "/Images/emoji-image.png"}
            onClick={handleEmojiIconClick}
          />
          <SearchInput
            placeholder="Start the conversation . .. ..."
            value={text}
            onKeyDown={handleEnterPress}
            onChange={handleTextChange}
            onFocus={handleInputFocus}
          />
        </SearchBoxContainerComponent>
      </ChatBox>
    </Container>
  );
};

export default ConversationalComponent;
