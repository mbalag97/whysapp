import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #7fe7dc;
  color: black;
  flex: 1.5;
  height: 1vh;
`;
export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #316879;
  color: white;
  padding: 13px;
`;
export const ProfileInfoImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
export const SearchBoxComponent = styled.div`
  display: flex;
  background: #7fe7dc;
  padding: 10px;
  border-bottom: 2px solid black;
`;
export const SearchBoxContainerComponent = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  padding: 10px;
  width: 100%;
`;
export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "WindSong", cursive;
  font-weight: bold;
  margin-left: 10px;
  width: 100%;
`;
