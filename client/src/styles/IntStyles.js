import styled from "styled-components";

// /* #DCDCDD #46494C #4C5C68 #1985A1,
// #582e83, #6E0D25 #533953 #3F5772
// #80B192 #136F63
// font - family: "Roboto", sans - serif;
// font - family: "Raleway", sans - serif;

export const InterviewCard = styled.div`
  flex: 0 1 40%;
  border: solid 1px #46494c;
  padding: 1em;
  margin: 1em;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 2px 2px #dcdcdd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  padding: 0.5em;
  color: #46494c;
  font-weight: lighter;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
