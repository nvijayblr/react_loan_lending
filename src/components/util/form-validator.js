export const ValidationFunctions = {
    isRequired: value => value ? undefined: 'Required',
    ssn: value => /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/.test(value) ? undefined: 'Please enter a valid ssn.',
    email: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Please enter a valid email address.',
    zip: value => /^[0-9]{5}-[0-9]{4}$/.test(value) || /^[0-9]{5}-$/.test(value) ? undefined: 'Please enter a valid zip code.',
    phone: value => /^\([0-9]{3}\)\s{1}[0-9]{3}-[0-9]{4}$/.test(value) ? undefined: 'Please enter a valid phone number.',
}

export const GetValidators = (field) => {
    const validators = [];
    if (field.isRequired)
      validators.push(ValidationFunctions.isRequired);
    if (field.displayFormat === "Phone")
      validators.push(ValidationFunctions.phone);
    else if (field.displayFormat === "Zip")
      validators.push(ValidationFunctions.zip);
    else if (field.displayFormat === "SSN/SIN")
      validators.push(ValidationFunctions.ssn);
    else if (field.displayFormat === "Email")
      validators.push(ValidationFunctions.email);
    return validators;
}

export const BuildValidationField = (field, value) => {
    if (!field)
        return {};
    const errors = {}
    GetValidators(field).map(
        validator => errors[field.id] = validator(value)
    );
    return errors;
}

// export const BuldValidationPage = (fields,values) => {
//     console.log("BUILD VALIDATION PAGE");
//     let errors = {};
//     fields.map(field => errors = {...errors, ...BuildValidationField(field,values[field.id])});
//     return errors;
// }

export const BuldValidationPage = (activePage) => (fieldSet,values) => {
    const fields = fieldSet[activePage].fields;
    let errors = {};
    fields.map(field => errors = {...errors, ...BuildValidationField(field,values[field.id])});
    return errors;
}

export const BuildValidationFunction = (fieldData, activePage) => (values, props) => {
    if (!fieldData)
        return {};
    let errors = {};
    fieldData.slice(0,activePage).map(page => {
        errors = { ...errors, ...BuldValidationPage(page.fields,values) }
    });
    return errors;
}