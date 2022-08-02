import styled from 'styled-components';

const GameHeader = styled.div`
  position: relative;
  height: 350px;
  padding-left: 20px;
  padding-right: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(34, 34, 34, 0.2) 0%,
      rgba(34, 34, 34, 0.8) 100%
    );
  }
  @media ${(props) => props.theme.media.md} {
    height: auto;
    padding-bottom: 50%;
  }
`;

const GameHeaderEmpty = styled(GameHeader)`
  @media ${(props) => props.theme.media.md} {
    height: 400px;
    padding-bottom: 0;
  }
`;

const GameHeaderWrapper = styled.div`
  padding: 120px 20px 50px;
  z-index: 90;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const GameTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 120%;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.media.md} {
    font-size: 50px;
  }
`;

const BackLink = styled.a`
  cursor: pointer;
  position: absolute;
  top: 90px;
  color: ${(props) => props.theme.colors.text};
  padding-left: 30px;
  background-image: url('/images/icons/arrow-back.svg');
  background-position: left center;
  background-size: 16px 8px;
  background-repeat: no-repeat;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.7;
  }
`;

const GameData = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${(props) => props.theme.media.md} {
    flex-direction: row;
    gap: 100px;
  }
`;

const GameInfo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

const GameDescription = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.text};

  p {
    margin-bottom: 15px;
    word-break: break-word;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export {
  GameHeader,
  GameHeaderEmpty,
  GameHeaderWrapper,
  GameTitle,
  BackLink,
  GameData,
  GameInfo,
  GameDescription,
};
