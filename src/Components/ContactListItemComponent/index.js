import {
  ContactDetailsComponent,
  ContactInfo,
  ContactListItemContainer,
  ContactName,
  MessageText,
  MessageTime,
  ProfileIcon,
} from "./ContactListitem";

const ContactListItem = (props) => {
  const { contactData, setSelectedChat } = props;
  const OnContactListclick = (event) => {
    event.preventDefault();
    setSelectedChat(contactData);
  };
  return (
    <ContactListItemContainer onClick={OnContactListclick}>
      <ProfileIcon src={contactData.profileImg} />
      <ContactDetailsComponent>
        <ContactInfo>
          <ContactName>{contactData.name}</ContactName>
          <MessageText>{contactData.lastMsg}</MessageText>
        </ContactInfo>
        <MessageTime>{contactData.lastMsgTime}</MessageTime>
      </ContactDetailsComponent>
    </ContactListItemContainer>
  );
};

export default ContactListItem;
