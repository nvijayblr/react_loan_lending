import React from 'react';
import { connect } from 'react-redux';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';

class ApplicationStepper extends React.Component {
    render() {
        const {steps, activeStep} = this.props;
        
        if (!steps)
        {
            return <div />;
        }
        return (
            <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map(item => {
                return (
                    <Step key={item.label}>
                        <StepLabel>{item.label}</StepLabel>
                    </Step>
                );
            })}
            </Stepper>
        );
    }
}
function mapStateToProps({application}) {
    return {steps: application.steps,activeStep: application.activeStep};
}
export default connect(mapStateToProps)(ApplicationStepper);