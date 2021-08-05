import styled from 'styled-components';

interface FormFieldProps {
  mode?: 'primary' | 'danger';
}

export const FormField = styled.div<FormFieldProps>`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.8em;
    color: gray;
    font-family: sans-serif;
  }
`;
