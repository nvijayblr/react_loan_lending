const sampleXml = `<?xml version="1.0"?>
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="loan-application">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="Data">
          <xs:complexType>
            <xs:sequence>

              <xs:element name="FirstName" value={{FirstName}} />
              <xs:element name="MiddleName" value={{MiddleName}} />
              <xs:element name="LastName" value={{LastName}} />
              <xs:element name="POBox" value={{POBox}} />
              <xs:element name="StreetName" value={{StreetName}} />
              <xs:element name="City" value={{City}} />
              <xs:element name="State" value={{State}} />
              <xs:element name="ZipCode" value={{ZipCode}} />

              <xs:element name="CellPhoneNumber" value={{CellPhoneNumber}} />
              <xs:element name="CellSecondPhoneNumber" value={{CellSecondPhoneNumber}} />
              <xs:element name="ApplicantEmail" value={{ApplicantEmail}} />

              <xs:element name="SSN" value={{SSN}} />
              <xs:element name="DOB" value={{DOB}} />
              <xs:element name="EmploymentStatus" value={{EmploymentStatus}} />
              <xs:element name="EmployerName" value={{EmployerName}} />
              <xs:element name="EmployerYears" value={{EmployerYears}} />
              <xs:element name="grossmonthlyincome" value={{grossmonthlyincome}} />

              <xs:element name="LoanAmount" value={{LoanAmount}} />
              <xs:element name="LoanDuration" value={{LoanDuration}} />

            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`;

export default sampleXml;
