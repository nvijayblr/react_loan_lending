import React from 'react';

//import AppConfig from '../../resources/config.json';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';


class FormStepsComponent extends React.Component{
    
    render(){
        return (
            <Stepper activeStep={this.props.currentState} orientation="vertical" style={{"maxWidth": "100%", "overflow": "hidden"}}>
              {this.props.getSteps().map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
        );
    }
}

export default compose(withWidth())(FormStepsComponent);