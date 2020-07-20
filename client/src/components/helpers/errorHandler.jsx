//@ts-check
import * as React from 'react';
import styled from 'styled-components';

export const useErrorHandler = initialState => {
  const [error, setError] = React.useState(initialState);
  const showError = errorMessage => {
    setError(errorMessage);
    window.setTimeout(() => {
      setError(null);
    }, 10000);
  };
  return { error, showError };
};


const ErrorMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #ff0000;
`;

export const ErrorMessageContainer = ({ errorMessage }) => {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};
