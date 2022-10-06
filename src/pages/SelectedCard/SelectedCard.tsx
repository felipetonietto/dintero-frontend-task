import React, { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card";
import { Select } from "../../components/Select/Select";
import { checkAccountNumber } from "../../quickr";

import { CheckText, ErrorMessage, ResultMessage } from "./styles";

type CompanyProps = {
  selectedCompany: any;
};

export const SelectedCard = ({ selectedCompany }: CompanyProps) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState(false);

  useEffect(() => {
    setAlertColor(false);
    setAlertMessage("");
  }, [selectedCompany]);

  async function handleInput(accountNumber: any) {
    setAlertColor(false);
    setAlertMessage("");
    onkeydown = (event) => {
      ["e", "E", "+", "-"].includes(event.key) && event.preventDefault();
    };
    if (
      accountNumber.toString().length < 11 &&
      accountNumber.toString().length
    ) {
      setAlertColor(false);
      setAlertMessage("Too short");
    } else if (
      accountNumber.toString() >= 11 &&
      accountNumber.toString().length
    ) {
      setAlertMessage("");
      let response = await checkAccountNumber(
        selectedCompany.organization_number,
        accountNumber
      );
      if (response === false) {
        setAlertMessage("Not owned by this company.");
      } else {
        setAlertColor(true);
        setAlertMessage("This account is owned by this company.");
      }
    }
    return;
  }

  return (
    <div>
      <Card company={selectedCompany} alreadySelected="alreadySelected"></Card>
      <CheckText>Check bank account ownership</CheckText>
      <Select
        placeholder="Account number"
        fetchInfo={handleInput}
        number="number"
        noIcon="noIcon"
      ></Select>
      <ResultMessage success={alertColor}>{alertMessage}</ResultMessage>
    </div>
  );
};
