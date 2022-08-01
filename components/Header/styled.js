import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.media.lg} {
    padding: 10px 20px;
  }
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  position: relative;
  cursor: pointer;
`;

export { HeaderStyle, Logo };
