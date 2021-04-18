import styled from "styled-components";

export const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  max-height: 500px;
  flex-direction: ${({ photoFirst }) => (photoFirst ? "row-reverse" : "row")};
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    flex-direction: column;
    max-height: 100%;
  }
`;

export const TextWrap = styled.div`
  max-width: 600px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    margin: 0;
    text-align: center;
  }
`;

export const ImgWrap = styled.div`
  img {
    max-height: 450px;
    height: 100%;
  }
`;
export const TitleWrapper = styled.div`
  max-width: 1350px;
  margin: 50px auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1,
  h3 {
    text-align: left;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 20px;
    font-weight: 700;
  }
`;

export const PageTitle = styled.h1`
  max-width: 800px;
  margin: 80px auto 0 auto;
  text-align: center;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin: 40px auto 10px auto;
  }
`;

export const PageSubtitle = styled.h3`
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
`;

export const HomeButton = styled.button`
  width: 340px;
  padding: 20px 50px;
  color: white;
  background-color: #3a8e17;
  margin: 30px 0;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
`;

export const CatalogWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const PageLinks = styled.div`
  display: flex;
  margin-bottom: 30px;
  .link {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    &:first-child {
      &:hover {
        transform: translateY(-5px);
        opacity: 0.8;
      }
    }

    svg {
      font-size: 25px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

export const Filter = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: #3a8e17;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    opacity: 0.7;
    transform: translateY(-5px);
  }
  svg {
    font-size: 25px;
    margin-right: 10px;
    transition: all 0.3s ease;
    transform: ${({ isFilterOpen }) =>
      isFilterOpen ? "rotate(180deg)" : "rotate(0)"};
  }
`;

export const PlantWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const PlantImg = styled.div`
  img {
    max-width: 500px;
  }
  @media screen and (max-width: 768px) {
    img {
      max-width: 300px;
    }
  }
`;
