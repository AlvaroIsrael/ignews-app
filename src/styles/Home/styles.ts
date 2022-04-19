import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem); // 5rem = header height

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hero = styled.section`
  max-width: 600px;

  > span {
    // only the first span
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: var(--cyan-500);
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }

  button {
    margin-top: 2.5rem;
  }
`;

export const Avatar = styled.div`
  width: 336px;
  height: 521px;
  position: relative;
  align-self: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Copyright = styled.footer`
  width: 100vw;
  text-align: center;
  animation: ${appearFromLeft} 1s;

  a {
    color: #ffffff;

    :link {
      text-decoration: none;
    }

    :visited {
      background-color: transparent;
      text-decoration: none;
    }

    :hover {
      background-color: transparent;
      text-decoration: underline;
    }

    :active {
      background-color: transparent;
      text-decoration: underline;
    }
  }

  margin-bottom: 50px;
  position: absolute;
  bottom: 0;
`;
