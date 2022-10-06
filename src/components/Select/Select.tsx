import React, { useEffect, useState } from "react";

import { StyledInput, StyledSvg, Wrapper } from "./styles";

type CompanyProps = {
  noIcon?: string;
  number?: string;
  placeholder: string;
  fetchInfo: (value: any) => Promise<void>;
};

export const Select = ({
  fetchInfo,
  placeholder,
  number,
  noIcon,
}: CompanyProps) => {
  const [text, setText] = useState("");

  // Debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchInfo(text);
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div>
      <Wrapper>
        {!noIcon && (
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </StyledSvg>
        )}
        <StyledInput
          type={number ? "number" : "text"}
          placeholder={placeholder}
          onChange={(event: any) => setText(event.target.value)}
        />
      </Wrapper>
    </div>
  );
};
