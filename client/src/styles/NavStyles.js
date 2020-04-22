import styled from "styled-components";

// /* #DCDCDD #46494C #4C5C68 #1985A1,
// #582e83, #6E0D25 #533953 #3F5772
// #80B192 #136F63
// font - family: "Roboto", sans - serif;
// font - family: "Raleway", sans - serif;

export const OpenButton = styled.button`
  border: none;
`;

export const ItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;

export const NavCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75vh;
`;

export const LinkCont = styled.div`
  top: 50%;
`;

export const NavItem = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size: 1em;
  padding: 1em 0em;
  color: white;
`;
export const NavItemSmall = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 0.75em;
  padding: 1em 0em;
  color: white;
`;
