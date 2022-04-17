import { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button, CloseIcon } from './styles';

export function SignInButton(): ReactElement {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <Button type='button'>
      <FaGithub color='#eba417' />
      Alvaro Israel
      <CloseIcon />
    </Button>
  ) : (
    <Button type='button'>
      <FaGithub color='#eba417' />
      Sign in with Github
    </Button>
  );
}
