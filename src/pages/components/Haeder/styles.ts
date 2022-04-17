import styled from 'styled-components';

type MenuLinkProps = {
  active?: boolean;
};

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
`;

export const Content = styled.header`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;
  }

  button {
    margin-left: auto;
  }
`;

export const MenuLink = styled.a<MenuLinkProps>`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  color: var(${props => (props.active ? '--white' : '--gray-300')});
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  transition: color 0.2s;

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: var(--white);
  }

  &::after {
    content: '';
    height: ${props => (props.active ? '3px' : '0')};
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 1px;
    left: 0;
    background: var(--yellow-500);
  }
`;
