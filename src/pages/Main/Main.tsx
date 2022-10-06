import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Select } from "../../components/Select/Select";

import "../../App.css";

import { ResultsText, StyledLabel, StyledP } from "./styles";

type CompanyProps = {
  companies: any[];
  setCompanies: (value: any) => void;
  setSelectedCompany: (value: any) => void;
};

export const Main = ({
  companies,
  setCompanies,
  setSelectedCompany,
}: CompanyProps) => {

  async function fetchCompanies(name: string) {
    let response = await fetch(
      `http://localhost:5173/dintero-api/organizations/?name=${name}`
    );
    const data = await response.json();
    setCompanies(data);
  }

  return (
    <div className="content">
      <div className="content">
        <StyledLabel>Search for a company</StyledLabel>
        <Select fetchInfo={fetchCompanies} placeholder="Company's name"></Select>
        <StyledP>Find your company</StyledP>

        {companies.length ? (
          <ResultsText>
            Showing {companies?.length} of {companies?.length} results
          </ResultsText>
        ) : (
          <ResultsText>No companies yet</ResultsText>
        )}

        {companies?.map((company: any) => {
          return (
            <Card company={company} setSelectedCompany={setSelectedCompany} />
          );
        })}
      </div>
    </div>
  );
};
