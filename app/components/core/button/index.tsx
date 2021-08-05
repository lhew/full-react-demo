import styled from 'styled-components';

interface ButtonProps {
  mode?: 'primary' | 'danger';
  transparent?: boolean;
  border?: boolean;
  small?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.3em 1em;
  height: 2.5em;
  color: ${({ transparent }) => (transparent ? '#000000' : '#FFFFFF')};
  border: none;
  box-shadow: ${({ border }) => (border ? 'inset 0 0 0 1px #dfdfdf' : 'none')};
  font-size: 1em;

  font-weight: bold;
  background: ${({ mode, transparent }) => {
    if (transparent) return 'transparent';
    return mode === 'danger' ? '#d35c5c' : '#39b139';
  }};

  &:hover,
  &:active {
    background: ${({ mode, transparent }) => {
      if (transparent) return 'transparent';
      return mode === 'danger' ? '#c04646' : '#289c28';
    }};
  }

  &:focus {
    background: ${({ mode, transparent }) => {
      if (transparent) return 'transparent';
      return mode === 'danger' ? '#862626' : '#1a7e1a';
    }};
  }
`;
