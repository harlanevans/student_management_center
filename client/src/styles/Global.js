import styled from "styled-components";

// /* #DCDCDD #46494C #4C5C68 #1985A1,
// #582e83, #6E0D25 #533953 #3F5772
// #80B192 #136F63
// font - family: "Roboto", sans - serif;
// font - family: "Raleway", sans - serif;

export const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  font-weight: lighter;
  color: #46494c;
`;
export const SubTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: lighter;
  color: #46494c;
`;

export const SchoolH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2.25em;
  font-weight: lighter;
  color: #46494c;
`;

export const Paragraph = styled.p`
  font-family: "Raleway", sans-serif;
  display: flex;
  font-size: 1em;
  color: #46494c;
  `;
  
  export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  `;

  
  export const Button = styled.button`
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

  export const ViewButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: .75em;
  padding: .5em 1em;
  border-radius 3px;
  border: solid 1.25px #4C5C68;
color: #4C5C68;
transition: .5s;

&:hover {
  background-color: #4C5C68;
  color: white;
}
`;

export const RedButton = styled.button`
font-family: "Raleway", sans-serif;
font-size: .75em;
padding: .5em 1em;
border-radius 3px;
border: solid 1.25px #6E0D25;
color: #6E0D25;
transition: .5s;

&:hover {
  background-color: #6E0D25;
  color: white;
}
`;

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
  padding: .5em 0em;
  margin: .5em 0em;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #46494c;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100%;
width: 100%;
`

export const Label = styled.label`
font-family: "Raleway", sans-serif;
font-size: 1em;
font-weight: 200;
color: gray;
margin-bottom: .25em;
text-align: left;
`

export const Select = styled.select`
  font-family: "Raleway", sans-serif;
  padding: 0.5em 0.5em;
  margin: 0.5em 0em;
  border: 1px solid #46494c;
  font-size: 1em;
  background-color: white;
`;
