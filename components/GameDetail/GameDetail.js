import React from 'react';
import {
  GameDetailLink,
  GameDetailStyled,
  GameDetailTitle,
  GameDetailValue,
} from './styled';

const GameDetail = ({ title, value, detailType }) => {
  if (detailType === 'link') {
    return (
      <GameDetailStyled>
        <GameDetailTitle>{title}</GameDetailTitle>
        <GameDetailLink href={value}>Click to visit</GameDetailLink>
      </GameDetailStyled>
    );
  }

  return (
    <GameDetailStyled>
      <GameDetailTitle>{title}</GameDetailTitle>
      <GameDetailValue>{value}</GameDetailValue>
    </GameDetailStyled>
  );
};

export default GameDetail;
