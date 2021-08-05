import styled from 'styled-components';

interface CardProps {
  shadow?: boolean;
  border?: boolean;
  dashed?: boolean;
}

export const Card = styled.div<CardProps>`
  background: #ffffff;
  border-radius: 0.4em;
  padding: 1.25em;
  box-shadow: ${({ shadow }) => (shadow ? '0 0 1em 0px #0000001a' : 'none')};
  border-width: 1px;
  border-style: ${({ dashed }) => (dashed ? 'dashed' : 'solid')};
  border-color: ${({ border }) => (border ? ' #e0e0e0' : '#FFFFFF')};
`;
