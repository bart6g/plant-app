import styled from "styled-components";
export const Container = styled.div`
  position: absolute;
  right: 30px;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`;

export const Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: white;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(12.5px) rotate(45deg)" : ""};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-12.5px) rotate(-45deg)" : ""};
  }
`;
