import { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Button, CloseIcon } from './styles';

export function SignInButton(): ReactElement {
  const [session] = useSession();

  return session ? (
    <Button type='button' onClick={() => signOut()}>
      <FaGithub color='#04d361' />
      Alvaro Israel
      <CloseIcon />
    </Button>
  ) : (
    <Button type='button' onClick={() => signIn('github')}>
      <FaGithub color='#eba417' />
      Sign in with Github
    </Button>
  );
}
