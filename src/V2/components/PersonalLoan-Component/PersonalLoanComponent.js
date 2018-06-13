import React from 'react';

import axios from 'axios';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
/*import List from '@material-ui/core/List';*/
import Hidden from '@material-ui/core/Hidden';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

import FormStepsComponent from '../FormSteps-Component/FormStepsComponent';
import FormContainerComponent from '../FormContainer-Component/FormContainerComponent';

import samplePostXml from '../../resources/sample_xml';

class PersonalLoanComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentStep: 0, showStepper: true, samplePostXml: samplePostXml, formData: {}};
        if(this.props.width === 'xs' || this.props.width === 'sm')
            this.state.showStepper = false;
        
        this.state.appSteps = ['Who is Applying', 'General Information', 'Contact Information', 'Personal Information', 'Customize Loan', 'Identity Verfication', 'Funding and Payments', 'Sign Your Loan Document'];
        
        this.state.stateDetails = [{
            title: 'Who is Applying For this Loan?',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum turpis acLorem ipsum dolor sit amet..',
            saveBtnLabel: 'Save & Continue'
        },{
            title: 'General Information',
            subTitle: 'Primary Borrower (you)',
            saveBtnLabel: 'Save & Continue'
        },{
            title: 'Contact Information',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum turpis acLorem ipsum dolor sit amet..',
            saveBtnLabel: 'Save & Continue'
        },{
            title: 'Personal Information',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum turpis acLorem ipsum dolor sit amet.',
            saveBtnLabel: 'Submit Application'
        },{
            title: 'Congratulations',
            subTitle: 'You have been qulified for a maximum loan of $40, 000. Select your desired loan terms to continue.',
            saveBtnLabel: 'Accept Loan Offer and Terms'
        },{
            title: 'Verify Your Identity',
            subTitle: 'We need further verification of your identity and income. Please upload an image of the following documents.',
            saveBtnLabel: 'Save & Continue'
        }/*,{
            title: 'Verify Your Identity (continued)',
            subTitle: 'We need further verification of your identity and income. Please upload an image of the following documents.',
            saveBtnLabel: 'Save & Continue'
        }*/,{
            title: 'Review & Confirm',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum turpis acLorem ipsum dolor sit amet.',
            saveBtnLabel: 'Save & Continue'
        },{
            title: 'Sign Your Loan Document',
            subTitle: 'To Finilize your loan, we need your signature. Tap the button bellow to be taken to the documents that need to be signed. When you have completed signing the documents, return to this window to wrap things up.',
            saveBtnLabel: 'Save & Continue'
        }]
        
        this.toggleStepper = this.toggleStepper.bind(this);
        this.getSteps = this.getSteps.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.redirectHome = this.redirectHome.bind(this);
        this.formHandler_input = this.formHandler_input.bind(this);
        this.postXMLData = this.postXMLData.bind(this);
    }
    
    toggleStepper(){
        let _tempValue = this.state;
        _tempValue.showStepper = !_tempValue.showStepper;
        this.setState(_tempValue);
    }
    
    getSteps(){
        return this.state.appSteps;
    }
    
    nextStep(){
        window.scrollTo(0,0);
        let _tempValue = this.state;
        _tempValue.currentStep = _tempValue.currentStep + 1;
        this.setState(_tempValue);
        
        if(this.state.currentStep+1 === this.state.appSteps.length)
            this.postXMLData();
    }
    
    redirectHome(){
        this.props.history.push('/');
    }
    
    formHandler_input(event){
        let _tempVar = this.state;
        _tempVar.formData[event.target.name] = event.target.value;
        this.setState(_tempVar);
    }
    
    postXMLData(){
        let _xmlData = '<loan-application><Data>';
        for(let key in this.state.formData){
            _xmlData += '<'+key+'>';
            _xmlData += this.state.formData[key];
            _xmlData += '</'+key+'>';
        }
        _xmlData += '<DealerId>9898</DealerId>';
        _xmlData += '<SourceSystemCode>DIRECTQA</SourceSystemCode>';
        _xmlData += '</Data></loan-application>';
        axios.post('https://defidirect.qa.defisolutions.com/Integrator/SubmitApplication?authtoken=5d845adca65e430793b1e44ed44bfae3', _xmlData ,{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } }).then(function(response){
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        /*let _xmlData = this.state.samplePostXml;
        for(let key in this.state.formData){
            _xmlData = _xmlData.replace('{{'+key+'}}', '"'+this.state.formData[key]+'"');
        }*/
        /*
            TODO: send the xml to post URL: https://defidirect.qa.defisolutions.com/Integrator/SubmitApplication?authtoken=5d845adca65e430793b1e44ed44bfae3
        */
        /*fetch('https://defidirect.qa.defisolutions.com/Integrator/SubmitApplication?authtoken=5d845adca65e430793b1e44ed44bfae3', {
            method: 'post',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
            },
            body: _xmlData
        }).then(res => {
            console.log(res);
        });*/
    }
    
    render(){
        return (
            <Grid container spacing={0}>
                
                <Hidden only={['xs', 'sm']}>
                    <Grid item xs={12} style={{"height": "25px"}} ></Grid>
                </Hidden>
            
                <Hidden only={['md', 'lg', 'xl']}>
                    <Grid item xs={12} style={{"marginTop": "2px", "paddingTop": "15px", "paddingBottom": "10px", "backgroundColor": "#fff"}} onClick={this.toggleStepper}>
                        <Grid container spacing={0}>
                            <Grid item xs={1} style={{"textAlign": "center", "fontSize": "12px", "padding": "0"}} >
                                {this.state.currentStep +1 > this.state.appSteps.length ? this.state.appSteps.length : this.state.currentStep +1 } / {this.state.appSteps.length}
                            </Grid>
                            <Grid item xs={10} style={{"paddingLeft": "7px", "paddingRight": "7px"}}>
                                <LinearProgress variant="determinate" value={( (this.state.currentStep + 1 ) / (this.state.appSteps.length) )* 100} style={{"height": "10px", "borderRadius": "5px", "marginTop": "4px"}} />
                            </Grid>
                            <Grid item xs={1} style={{"textAlign": "center"}}>
                                <img src={require("../../assets/icon/icon-dropdown.png")} alt="DropDown"/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Hidden>
                
            
                <Hidden only={['xs', 'sm']}>
                    <Grid item xs={2} sm={4} md={2}>
                    </Grid>
                </Hidden>
                
                {
                    this.state.showStepper && <Grid item xs={12} sm={12} md={3}>
                        <FormStepsComponent currentState={this.state.currentStep} getSteps={this.getSteps} />
                    </Grid>
                }
                
                <Hidden only={['md', 'lg', 'xl']}>
                    {
                        this.state.showStepper && 
                        <Grid item xs={12} style={{"backgroundColor": "#fff", "borderBottom": "2px solid #fff"}}>
                            <p style={{"textAlign": "center"}}>
                                <Button  variant="outlined" color="primary" style={{"width": "300px"}} onClick={this.toggleStepper} >
                                    Close
                                    <img style={{"right": "10px", "position": "absolute", "width": "10px"}} src={require("../../assets/icon/icon-dropdown.png")} alt="DropDown"/>
                                </Button>
                            </p>
                        </Grid>
                    }
                </Hidden>
                

                <Grid item xs={12} sm={12} md={5}>
                    <FormContainerComponent currentStep={this.state.currentStep+1} totalSteps={this.state.appSteps.length} nextStep={this.nextStep} title={this.state.stateDetails[this.state.currentStep]? this.state.stateDetails[this.state.currentStep].title : ""} subTitle={this.state.stateDetails[this.state.currentStep]? this.state.stateDetails[this.state.currentStep].subTitle : ""} saveBtnLabel={this.state.stateDetails[this.state.currentStep]? this.state.stateDetails[this.state.currentStep].saveBtnLabel : ""} redirectHome={this.redirectHome} inputOnChange={this.formHandler_input} />
                </Grid>

            </Grid>
        );
    }
}

export default compose(withWidth())(PersonalLoanComponent);


