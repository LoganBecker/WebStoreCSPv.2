import styled from 'styled-components';



export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid var(--lightBlue);
  border-radius: 5px;
  color: var(--lightBlue);
  padding: 2px;
  cursor: pointer;
  margin: 2px 2px 2px;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus{
    outline: none;
  }
`;
