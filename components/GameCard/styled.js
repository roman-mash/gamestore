import styled from 'styled-components';

const GameCardStyled = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const GameCardImage = styled.div`
  position: relative;
  padding-bottom: 60%;
  overflow: hidden;
`;

const GameCardInfo = styled.div`
  padding: 20px 20px 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GameCardTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 120%;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const GameCardDetails = styled.div`
  margin-top: auto;
`;

export {
  GameCardStyled,
  GameCardImage,
  GameCardInfo,
  GameCardTitle,
  GameCardDetails,
};
