import React from 'react';
import './FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Step1 from './step1/step1Component';
import Step2 from './step2/step2Component';
import Step3 from './step3/step3Component';
import Step4 from './step4/step4Component';
import Step5 from './step5/step5Component';
import Step6 from './step6/step6Component';
import Step7 from './step7/step7Component';
import Step8 from './step8/step8Component';
import Step9 from './step9/step9Component';


class FormContainerComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {selectedType: ""};
        
        this.radioHandler = this.radioHandler.bind(this);
    }
    
    radioHandler(event){
        let _temVar = this.state;
        _temVar["selectedType"] = event.target.value
        this.setState(_temVar)
        console.log(event.target.value);    
    }
    
    render(){
        return (
            <Paper elevation={4} className="formContainer-parent">
                <div className="formTitle">
                    <Typography variant="headline" component="h3" >
                          {this.props.title}
                            <p className="textDescription">{this.props.subTitle}</p>
                    </Typography>
                </div>
            
            
                {
                    this.props.currentStep === 1 && <Step1 />
                }
                {
                    this.props.currentStep === 2 && <Step2 inputOnChange={this.props.inputOnChange} />
                }
                {
                    this.props.currentStep === 3 && <Step3 inputOnChange={this.props.inputOnChange} />
                }
                {
                    this.props.currentStep === 4 && <Step4 inputOnChange={this.props.inputOnChange} />
                }
                {
                    this.props.currentStep === 5 && <Step5 inputOnChange={this.props.inputOnChange} />
                }
                {
                    this.props.currentStep === 6 && <Step6 inputOnChange={this.props.inputOnChange} />
                }
                {
                    this.props.currentStep === 7 && <Step7 inputOnChange={this.props.inputOnChange} />
                }
                {
                    this.props.currentStep === 8 && <Step8 nextStep={this.props.nextStep} />
                }
                {
                    this.props.currentStep === 9 && <Step9 redirectHome={this.props.redirectHome} />
                }
                
            
                {
                    this.props.currentStep < this.props.totalSteps && <div className="saveBtnContainer"> <Button variant="outlined" color="primary" className="saveBtn" onClick={this.props.nextStep} >{this.props.saveBtnLabel}</Button> </div>
                }
                
                
            </Paper>
        );
    }
}

export default compose(withWidth())(FormContainerComponent);

/*{
, 
                    this.props.currentStep < this.props.totalSteps && 
                    <Button variant="outlined" color="primary" style={{"width": "300px"}} onClick={this.props.nextStep} >Save & Continue</Button>
                }*/