import React from 'react';
import {Field} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import MaskedInput from 'react-text-mask';
import Typography from 'material-ui/Typography';
//import NumberFormat from 'react-number-format';

export function fieldGenerator_MaterialUI(input) {
  const {touched, error, submitFailed, submitting} = input.meta;
  return (
      <TextField id={input.id} {...input} error={(touched || submitFailed || submitting) && !!error} helperText={(touched || submitFailed || submitting) && error !== "Required" && error} {...input.input} >
      {
          input.children
      }
      </TextField>
  );
}

function buildConditionalProps(field) {
  //console.log(field);
  let conditionalProps = {};
  if (field.format === "date" || field.displayFormat === "Phone" || field.displayFormat === "Zip" || field.displayFormat === "SSN/SIN") {
    conditionalProps.InputLabelProps = { shrink: true };
  }
  if (field.displayFormat === "Phone") {
    conditionalProps.InputProps={ inputComponent: TextMaskCustom(['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]) };
  }
  else if (field.displayFormat === "Zip") {
    conditionalProps.InputProps={ inputComponent: TextMaskCustom([/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]) };
  }
  else if (field.displayFormat === "SSN/SIN") {
    conditionalProps.InputProps={ inputComponent: TextMaskCustom([/\d/, /\d/, /\d/,'-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]) };
  }
  return conditionalProps;
}

const TextMaskCustom = (mask) => {
  return (props) => {
    const { inputRef, ...other } = props;
    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={mask}
        showMask
      />
    );
  }
}

export function FieldGenerator({field,data,component,onChange}) {
  // console.log(field);
  // console.log(data);
  if (!component)
    component = fieldGenerator_MaterialUI;
  if (!field.inputType) {
    return (
      <Typography style={{margin:10, width: "90%", fontSize:"18px", fontWeight:"bold"}}>{field.content}</Typography>
    );
  }
  const conditionalProps = buildConditionalProps(field);
  const fieldPrototype = (
    <Field
      label={field.title}
      name={field.id}
      children={field.choices && field.choices.map(
        choice => <MenuItem key={choice.Description} value={choice.Description}>{choice.Description}</MenuItem>
      )}
      select={field.inputType === "Dropdown"}
      disabled={field.readonly}
      fullWidth
      type={field.format || "string"}
      value={data && data[field.id]}
      style={{margin:10, width: "90%"}}
      component={component}
      margin="normal"
      onChange={onChange}
      {...conditionalProps} />);
  
  return fieldPrototype;
}