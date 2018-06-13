const sampleXml = `<?xml version="1.0"?>
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="loan-application">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="Data">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="ApplicantDLNumber" value={{ApplicantDLNumber}} />
              <xs:element name="ApplicantEmail" value={{ApplicantEmail}} />
              <xs:element name="BorrowerState" value={{BorrowerState}} />
              <xs:element name="CellPhoneNumber" value={{CellPhoneNumber}} />
              <xs:element name="City" value={{City}} />
              <xs:element name="CoApplicantEmail" value={{CoApplicantEmail}} />
              <xs:element name="CoApplicantFirstName" value={{CoApplicantFirstName}} />
              <xs:element name="CoApplicantLastName" value={{CoApplicantLastName}} />
              <xs:element name="DealerId" value={{DealerId}} />
              <xs:element name="DOB" value={{DOB}} />
              <xs:element name="employermonths" value={{employermonths}} />
              <xs:element name="EmployerName" value={{EmployerName}} />
              <xs:element name="EmployerOccupation" value={{EmployerOccupation}} />
              <xs:element name="EmployerTypeCode" value={{EmployerTypeCode}} />
              <xs:element name="EmployerYears" value={{EmployerYears}} />
              <xs:element name="EmploymentStatus" value={{EmploymentStatus}} />
              <xs:element name="FirstName" value={{FirstName}} />
              <xs:element name="grossmonthlyincome" value={{grossmonthlyincome}} />
              <xs:element name="LastName" value={{LastName}} />
              <xs:element name="MonthlyRentPayment" value={{MonthlyRentPayment}} />
              <xs:element name="Months" value={{Months}} />
              <xs:element name="POBox" value={{POBox}} />
              <xs:element name="SourceSystemCode" value={{SourceSystemCode}} />
              <xs:element name="SSN" value={{SSN}} />
              <xs:element name="State" value={{State}} />
              <xs:element name="StreetName" value={{StreetName}} />
              <xs:element name="StreetNo" value={{StreetNo}} />
              <xs:element name="TestDropdown" value={{TestDropdown}} />
              <xs:element name="TestText" value={{TestText}} />
              <xs:element name="VehicleMake" value={{VehicleMake}} />
              <xs:element name="VehicleModel" value={{VehicleModel}} />
              <xs:element name="VehicleVIN" value={{VehicleVIN}} />
              <xs:element name="VehicleYear" value={{VehicleYear}}/>
              <xs:element name="Years" value={{Years}} />
              <xs:element name="ZipCode" value={{ZipCode}} />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`;

export default sampleXml;