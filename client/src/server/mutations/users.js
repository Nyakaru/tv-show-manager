//@ts-check
import { gql } from "apollo-boost";

export const signUpMutation = gql`
  mutation signUpMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password ) {
      token
    }
  }
`;

export const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password ) {
      token
    }
  }
`;
