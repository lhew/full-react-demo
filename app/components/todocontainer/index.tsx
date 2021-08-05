import styled from 'styled-components';

export const TodoListContainer = styled.div`
  display: grid;
  gap: 1.25em;
  padding: 1em 0;
`;

export const TodoItemWrapper = styled.div<{
  checked?: boolean;
  disabled?: boolean;
}>`
  display: grid;
  grid-template: auto / auto 1fr;
  gap: 1em;
  cursor: pointer;

  & > div {
    opacity: ${({ checked }) => (checked ? 0.3 : 1)};
    filter: blur(${({ disabled }) => (disabled ? '1.5px' : 'none')});
  }
`;
