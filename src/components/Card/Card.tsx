import React from "react";

import {
  Content,
  NameLabel,
  OrgLabel,
  AddressLabel,
  InfoWrapper,
  SelectWrapper,
  SelectButton,
  ButtonWrapper,
  ButtonText,
} from "./styles";

import { getCountryName } from "../utils/functions";
import { Link } from "react-router-dom";

type CompanyProps = {
  company: Company;
  alreadySelected?: any;
  setSelectedCompany?: (value: any) => void;
};

export const Card = ({
  company,
  alreadySelected,
  setSelectedCompany,
}: CompanyProps) => {
  return (
    <>
      <Content>
        <InfoWrapper>
          <NameLabel>{company?.business_name}</NameLabel>
          <OrgLabel>{`Org no. ${company?.organization_number}`}</OrgLabel>
          <AddressLabel>
            {company?.business_address?.address_line ||
              company?.registry_address?.address_line}
          </AddressLabel>
          <AddressLabel>
            {company?.business_address?.postal_code ||
              company?.registry_address?.postal_code}{" "}
            <span>
              {company?.business_address?.postal_place ||
                company?.registry_address?.postal_place}
            </span>
          </AddressLabel>
          <AddressLabel>
            {getCountryName(company?.business_address?.country) ||
              getCountryName(company?.registry_address?.country)}
          </AddressLabel>
        </InfoWrapper>
        {!alreadySelected && (
          <SelectWrapper>
            <SelectButton
              onClick={() => {
                if(setSelectedCompany){
                  setSelectedCompany(company);
                }
              }}
            >
              <Link to="/company" >
                <ButtonWrapper>
                  <ButtonText>Select</ButtonText>
                  {
                    <svg
                      style={{ width: "18px" }}
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
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  }
                </ButtonWrapper>
              </Link>
            </SelectButton>
          </SelectWrapper>
        )}
      </Content>
    </>
  );
};
