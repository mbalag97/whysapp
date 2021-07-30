import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./Components/ContactListComponent";
import ConversationalComponent from "./Components/ConversationComponent";

const ScreenContainer = styled.div`
background: black;
height: 1vh;
width: 100%;
margin: 0px;
padding: 0px;
`;
const MainContainer = styled.div`
  width: 1500px;
  background: #ced7d8;
  font-family: "WindSong", cursive;
  display: flex;
  flex-direction: row;
  height: 100vh;
  color: black;
  font-weight: bold;
  margin: auto;
`;
const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #efefef;
  gap: 10px;
  span {
    font-size: 32px;
    color: black;
    font-weight: bold;
  }
`;
const PlaceholderImage = styled.img``;
const App = () => {
  const [selectedChat, setSelectedChat] = useState();
  return (
    <ScreenContainer>
      <MainContainer>
        <ContactListComponent setSelectedChat={setSelectedChat} />
        {selectedChat ? (
          <ConversationalComponent selectedChat={selectedChat} />
        ) : (
          <Placeholder>
            <PlaceholderImage src="/Images/cell-tower.png" />
            <span>Keep Your Phone Conected</span>
            Have funn with your friends circle.
          </Placeholder>
        )}
      </MainContainer>
    </ScreenContainer>
  );
};

export default App;
