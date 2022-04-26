import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem); // 5rem = header height

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
  }
`;

export const NotFound = styled.div`
  min-width: 186px;
  width: 186px;
  height: 174px;
  position: relative;
  align-self: center;
  margin-bottom: 1.6rem;
`;

export const Button = styled.button`
  width: 200px;
  height: 3rem;
  border: 0;
  border-radius: 2rem;
  background: var(--yellow-500);
  color: var(--gray-900);
  font-size: 1.25rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
