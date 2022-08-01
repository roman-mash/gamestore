import styled, { keyframes } from 'styled-components';

const shadowRolling = keyframes` 
  0% {  
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 
      0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0), 
      0px 0 rgba(255, 255, 255, 0); 
  }
  12% {  
    box-shadow: 100px 0 rgba(255, 255, 255, 1),
      0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0), 
      0px 0 rgba(255, 255, 255, 0); 
  }
  25% {  
    box-shadow: 110px 0 rgba(255, 255, 255, 1), 
      100px 0 rgba(255, 255, 255, 1), 
      0px 0 rgba(255, 255, 255, 0), 
      0px 0 rgba(255, 255, 255, 0); 
  }
  36% {  
    box-shadow: 120px 0 rgba(255, 255, 255, 1), 
      110px 0 rgba(255, 255, 255, 1), 
      100px 0 rgba(255, 255, 255, 1), 
      0px 0 rgba(255, 255, 255, 0); 
  }
  50% {  
    box-shadow: 130px 0 rgba(255, 255, 255, 1), 
      120px 0 rgba(255, 255, 255, 1), 
      110px 0 rgba(255, 255, 255, 1), 
      100px 0 rgba(255, 255, 255, 1); 
  }
  62% {  
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 
      130px 0 rgba(255, 255, 255, 1), 
      120px 0 rgba(255, 255, 255, 1), 
      110px 0 rgba(255, 255, 255, 1); 
  }
  75% {  
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 
      200px 0 rgba(255, 255, 255, 0), 
      130px 0 rgba(255, 255, 255, 1), 
      120px 0 rgba(255, 255, 255, 1); 
  }
  87% {  
    box-shadow: 200px 0 rgba(255, 255, 255, 0),
      200px 0 rgba(255, 255, 255, 0), 
      200px 0 rgba(255, 255, 255, 0), 
      130px 0 rgba(255, 255, 255, 1); 
  }
  100% { 
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 
      200px 0 rgba(255, 255, 255, 0), 
      200px 0 rgba(255, 255, 255, 0), 
      200px 0 rgba(255, 255, 255, 0); 
  }
`;

const LoaderStyled = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  color: #fff;
  left: -100px;
  animation: ${shadowRolling} 2s linear infinite;
`;

const LoaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export { LoaderStyled, LoaderWrap };
