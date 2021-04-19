import styled from "styled-components";

export const Rows = styled.div``;
export const Row = styled.div`
  display: flex;
  align-items: center;

  margin: 5px 0;

  svg {
    font-size: 35px;
  }
  p {
    margin: 0 20px;
  }

  @media screen and (max-width: 500px) {
    svg {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
    span {
      display: none;
    }
  }
`;

export const Square = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${({ empty }) => (empty ? "transparent" : "#262624")};
  border: ${({ empty }) => (empty ? "1px solid #262624" : "none")};
  margin-right: 5px;

  @media screen and (max-width: 500px) {
    width: 13px;
    height: 13px;
  }
`;

export const Button = styled.button`
  padding: 15px 45px;
  font-size: 18px;
  border: 1px solid #262624;
  background: transparent;
  color: #262624;
  margin: 50px 0;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`;

export const Container = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
