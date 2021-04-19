import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const Row = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 10px;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  input {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 32px;
  background: transparent;
  border: 1px solid black;
  margin: 20px 0;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;

  label {
    width: 100%;
    display: flex;
    position: relative;
    /* align-items: center; */
    margin: 25px 0;
    span {
      position: absolute;
      display: block;
      top: 13px;
      left: 10px;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    input,
    textarea {
      width: 100%;
      height: 50px;
      padding-left: 10px;
      border: none;
      outline: none;

      &:focus,
      &:valid {
        border: 1px solid black;
      }
    }
    input:focus,
    input:valid,
    textarea:focus,
    textarea:valid {
      + .placeholder {
        top: -12px;
        display: block;
        font-weight: 600;
        font-size: 12px;
        background-color: white;
        padding: 0 10px;
        border: 1px solid black;
      }
    }
    textarea {
      height: 150px;
      padding-top: 20px;
    }
  }
`;
