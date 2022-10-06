import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 12px;
  width: 571px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  color: #171717;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSvg = styled.svg`
  height: 1.5rem;
  width: 2rem;
  padding: 2px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 94%;
  transform: translateY(-50%);
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`;
