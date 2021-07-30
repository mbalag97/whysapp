import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  flex: 3;
  height: 100%;
`;
export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #316879;
  color: white;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
export const ChatBox = styled.div`
  display: flex;
  background: #316879;
  padding: 10px;
  color: white;
  align-items: center;
  bottom: 0;
`;
export const EmojiImage = styled.img`
  width: 25px;
  height: 25px;
  opacity: 0.7;
  cursor: pointer;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;
export const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
`;
export const Message = styled.div`
background: ${(props) => (props.isYours ? "#f47a60" : "#7fe7dc")};
border-radius: 15px;
  color: black;
  padding: 8px10px;
  font-size: 12px;
  max-width: 50%;
  padding 10px 12px;
`;