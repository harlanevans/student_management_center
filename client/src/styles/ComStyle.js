import React from "react";
import styled from "styled-components";

// /* #DCDCDD #46494C #4C5C68 #1985A1,
// #582e83, #6E0D25 #533953 #3F5772
// #80B192 #136F63
// font - family: "Roboto", sans - serif;
// font - family: "Raleway", sans - serif;

export const FormButton = styled.button`
font-family: "Raleway", sans-serif;
font-size: .75em;
padding: .5em 1em;
border-radius 3px;
border: solid 1.25px #1985A1;
color: #1985A1;
transition: .5s;

&:hover {
  background-color: #1985A1;
  color: white;
}
`;

export const Input = styled.input`
  font-family: "Raleway", sans-serif;
  padding: 0.5em 0.5em;
  margin: 0.5em 0em;
  border: 1px solid #46494c;
  border-radius: 3px;
  font-size: 1em;
`;
export const Text = styled.textarea`
  font-family: "Raleway", sans-serif;
  padding: 0.5em 0.5em;
  margin: 0.5em 0em;
  border: 1px solid #46494c;
  border-radius: 3px;
  font-size: 1em;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

export const Select = styled.select`
  font-family: "Raleway", sans-serif;
  padding: 0.5em 0.5em;
  margin: 0.5em 0.5em;
  border: 1px solid #46494c;
  font-size: 1em;
  background-color: white;
`;

export const CommentCard = styled.div`
  flex: 0 0 40%;
  font-family: "Raleway", sans-serif;
  border: solid .5px grey;
  padding: 1em;
  margin: 1em 0em;
  border-radius: 3px;
  width: 95%;
  height: 100%;
  background-color: white;
  box-shadow: .5px .5px 1px 1px #dcdcdd;
`;

export const Author = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.15em;
  color: #46494c;
  font-style: bold;
  font-weight: 900;
`;
export const Body = styled.p`
font-family: "Raleway", sans-serif;
font-size: 1em;
`;
export const Count = styled.p`
font-family: "Roboto", sans-serif;
font-size: 0.5em;
color: #46494c;
`;
export const DatePosted = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: .75em;
  color: #46494c;
  font-style: italic;
  font-weight: 900;
`;

export const TagOther = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-size: .75em;
  padding: .5em 1em;
  border-radius 3px;
  border: solid 1.25px #46494c;
  color: white;
  background-color: #46494c;
  `;
export const TagProgress = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-size: .75em;
  padding: .5em 1em;
  border-radius 3px;
  border: solid 1.25px #136F63;
  color: white;
  background-color: #136F63;
  `;
export const TagUpdate = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-size: .75em;
  padding: .5em 1em;
  border-radius 3px;
  border: solid 1.25px #1985A1;
  color: white;
  background-color: #1985A1;
  `;
export const TagConcern = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-size: .75em;
  padding: .5em 1em;
  border-radius 3px;
  border: solid 1.25px #6E0D25;
  color: white;
  background-color: #6E0D25;
  `;
