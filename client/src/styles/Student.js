import styled from "styled-components";

// /* #DCDCDD #46494C #4C5C68 #1985A1,
// #582e83, #6E0D25 #533953 #3F5772
// #80B192 #136F63
// font - family: "Roboto", sans - serif;
// font - family: "Raleway", sans - serif;

export const StudentCard = styled.div`
  flex: 1 1 37%;
  border: solid 2px #46494c;
  padding: 1.5em;
  margin: 1em;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 2px 2px #dcdcdd;
`; 

export const Name = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  color: #46494c;
  font-weight: lighter;
`;

export const Skill = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  color: #46494c;
  font-weight: lighter;
`;
export const HighAverage = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  color: #dcdcdd;
  font-weight: 900;
  background-color: #136f63;
  border: solid 1px #136f63;
  border-radius: 3px;
  padding: 0.25em 0.5em;
`;
export const Average = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  color: #dcdcdd;
  font-weight: 900;
  background-color: #582e83;
  border: solid 1px #582e83;
  border-radius: 3px;
  padding: 0.25em 0.5em;
`;
export const LowAverage = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  color: #dcdcdd;
  font-weight: 900;
  background-color: #6e0d25;
  border: solid 1px #6e0d25;
  border-radius: 3px;
  padding: 0.25em 0.5em;
`;

export const StudentCardAll = styled.div`
  flex: 0 0 25%;
  border: solid 2px #46494c;
  padding: 0.5em 0.5em;
  color: #46494c;
  margin: 0.5em;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 2px 2px #dcdcdd;
  transition: 0.5s;
  &:hover {
    color: white;
    background-color: #3f5772;
  }
`;
export const NameAll = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  font-weight: lighter;
`;

export const Count = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  padding: 0em 1em;
  border-radius 3px;
  border: solid 1.25px #4C5C68;
color: #4C5C68;
transition: .5s;

&:hover {
  background-color: #4C5C68;
  color: white;
}
`;
