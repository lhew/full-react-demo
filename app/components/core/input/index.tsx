import styled from 'styled-components';

interface InputProps {
  mode?: 'primary' | 'danger';
}

export const Input = styled.input<InputProps>`
  height: 2.5em;
  color: gray;
  box-shadow: inset 0 0 0 1px #dfdfdf;
  border: none;
  font-size: 1em;
  padding: 0 1em;
  outline: #636363;
  outline-width: 1px;

  &:hover,
  &:active {
    box-shadow: inset 0 0 0 1px #bdbdbd;
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #686868;
  }

  &::placeholder {
    color: darkgray;
  }
`;
