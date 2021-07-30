import ContactListItem from "../ContactListItemComponent";
import { CONTACT_LIST } from "../../mockdata";
import {
  Container,
  ProfileInfoContainer,
  ProfileInfoImage,
  SearchBoxComponent,
  SearchBoxContainerComponent,
  SearchIcon,
  SearchInput,
} from "./contactListComponent";
const ContactListComponent = (props) => {
  return (
    <Container>
      <ProfileInfoContainer>
        <ProfileInfoImage src={process.env.PUBLIC_URL+"/Images/profile-avatar.png"} />
      </ProfileInfoContainer>
      <SearchBoxComponent>
        <SearchBoxContainerComponent>
          <SearchIcon src={process.env.PUBLIC_URL+"/Images/search-icon.png"} />
          <SearchInput placeholder="Search here to chat . .. ..." />
        </SearchBoxContainerComponent>
      </SearchBoxComponent>
      {CONTACT_LIST.map((contacts, index) => {
        return <ContactListItem contactData={contacts} key={index} setSelectedChat={props.setSelectedChat}/>;
      })}
    </Container>
  );
};

export default ContactListComponent;
