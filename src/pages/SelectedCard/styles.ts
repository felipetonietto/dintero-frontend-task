import styled from "styled-components";

export const CheckText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #171717;
`;

export const ErrorMessage = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #eb5757;
`;

export const ResultMessage = styled.p<{success: boolean}>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.success ? "rgb(75,181,67)" : "#eb5757")};
`;
