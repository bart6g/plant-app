import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #0f0e0e;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: fixed;
  width: 100%;
`;

export const NavWrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  /* position: relative; */
`;

export const Logo = styled.div`
  img {
    width: 60%;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  transition: all 0.3s ease;
  li {
    list-style: none;
    transition: all 0.3s ease;
    a {
      color: white;
      display: block;
      padding: 0 15px;
      text-decoration: none;
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-5px);
        opacity: 0.8;
      }
    }

    .active {
      color: #3a8e17;
    }
  }

  @media screen and (max-width: 768px) {
    li:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(500px)"};
      transition-delay: 0.1s;
    }
    li:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-500px)"};
      transition-delay: 0.2s;
    }
    li:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(500px)"};
      transition-delay: 0.3s;
    }
    li:nth-child(4) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-500px)"};
      transition-delay: 0.4s;
    }

    background-color: #0f0e0e;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;
