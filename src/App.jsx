import { styled } from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: lightgreen;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: rebeccapurple;
  color: white;
  margin: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: lightpink;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>Hello World</H1>
      <Button onClick={() => alert("CheckedIn")}>Checked In</Button>
      <Button onClick={() => alert("CheckedOut")}>Checked Out</Button>
      <Input type="number" placeholder="Number of Guest"></Input>
    </StyledApp>
  );
}

export default App;
