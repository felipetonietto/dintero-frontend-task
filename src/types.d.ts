interface Company {
  business_name: string;
  organization_number: string;
  organization_type: string;
  response_from: string;
  website_url: string;
  business_address?: CompanyAddress;
  registry_address?: CompanyAddress;
}

interface CompanyAddress {
  address_line: string;
  address_line_2: string;
  country: string;
  postal_code: string;
  postal_place: string;
}