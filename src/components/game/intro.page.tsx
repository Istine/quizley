import React from "react";
import styled from "styled-components";

type ContainerProps = { customStyles?: string };

const Container = styled.div<ContainerProps>(
  (props) => `
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items:center;
  ${props.customStyles}`
);

const StyledList = styled.ul`
  fonf-family: roboto, sans-serif;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  font-family: "poppins", sans-serif;
  font-size: 15px;
  color: rgb(83, 83, 83);
  padding: 0;
  margin: 0.4rem 0;
  text-align: left;
  
  &:nth-child(1)::before {
    content: "\\231A";
    color: orange;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right 1rem;
  }

    &:nth-child(2)::before {
      content: "\\2714";
      color: limegreen;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right 1rem;
    }

    &:nth-child(3)::before {
      content: "\\2B50";
      color: gold;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right 1rem;
    }

    &:nth-child(4)::before {
      content: "\\1F3AC";
      color: red;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right 1rem;
    }
    
`;

const StyledForm = styled.form`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 250px);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem 1rem;
  padding: 0;
  justify-content: center;
`;

const StyledInput = styled.input`
  outline: none;
  width: 100%;
  border: 0.3px solid #82808e;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 5px;
  color: #202020;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: #1a0b70;
  color: white;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
`;

const styles = `
height: auto;
padding:1rem 0;
`;

const IntroPage: React.FC<{}> = () => {
  return (
    <Container>
      <StyledList>
        <StyledListItem>
          Welcome, You will have <b>25mins</b> to complete this assessment.
        </StyledListItem>
        <StyledListItem>
          Read the questions properly, and select the answer you feel is
          <b> correct</b>.
        </StyledListItem>
        <StyledListItem>
          This quiz cannot be paused, so make sure you have enough time before
          starting.
        </StyledListItem>
        <StyledListItem>
          Don't switch tabs, and <b style={{ color: "#26CA62" }}>Good luck!</b>
        </StyledListItem>
      </StyledList>
      <Container customStyles={styles}>
        <StyledForm>
          <StyledInput placeholder="First Name" required />
          <StyledInput placeholder="Last Name" required />
          <StyledInput placeholder="Email" required />
          <StyledButton>Continue to Game</StyledButton>
        </StyledForm>
      </Container>
    </Container>
  );
};

export default IntroPage;
