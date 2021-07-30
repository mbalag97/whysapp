import styled from "styled-components";
import { ProfileInfoImage } from "../ContactListComponent/contactListComponent";
export const ContactListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 15px 12px;
  :hover {
    background: #a8eae4;
  }
`;
export const ProfileIcon = styled(ProfileInfoImage)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;
export const ContactDetailsComponent = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
  width: 100%;
  padding: 5px 0px;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
  margin: 0 12px;
`;
export const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  font-family: "WindSong", cursive;
  color: black;
`;
export const MessageText = styled.span`
  width: 100%;
  font-size: 12px;
  font-family: "WindSong", cursive;
  color: grey;
`;
export const MessageTime = styled.span`
  font-size: 10px;
  font-family: "WindSong", cursive;
  color: grey;
  margin-right: 10px;
  white-space: nowrap;
`;
