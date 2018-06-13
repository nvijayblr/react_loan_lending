import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';

class step7Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {policyCheck: false};
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event, value){
        let _temVar = this.state;
        _temVar[event.target.name] = !_temVar[event.target.name];
        this.setState(_temVar);
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
            
                    <FormControl fullWidth className="customSlider" style={{"paddingTop": "10px"}}>
                        
                        <Card className={this.state.ecuBank ? "policyCheckCnt checked" : "policyCheckCnt"}>
                            <CardContent>
                                <Typography className="textAlignLeft" style={{"fontSize": "17px"}}>
                                    PRIVACY POLICY TERMS
                                </Typography>
                                <Typography className="textAlignLeft" style={{"maxHeight": "250px", "overflow": "auto", "color": "#BDBDBD"}}>
                                    When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
                                    This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
                                    When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
                                    This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
                                    When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
                                    This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
                                    When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
                                    This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
                                    When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
                                    This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
                                    When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
                                    This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
                                </Typography>
                            </CardContent>
                        </Card>
                        
                    </FormControl>
            
                    <hr className="hrGap" />
                    
                    <FormControl fullWidth>
                        <Card className={this.state.policyCheck ? "policyCheckCnt checked" : "policyCheckCnt"}>
                            <CardContent>
                                <Typography className="textAlignLeft">
                                    I agree to the above terms 
                                    <Checkbox className="policyCheckBox" checked={this.state.policyCheck} onChange={this.handleChange} name="policyCheck" value="checkedB" color="primary" />
                                </Typography>
                                <hr />
                                <Typography className="textAlignLeft" style={{"color": "#BDBDBD"}}> 
                                    Checking this box indicates that you have read the following and given your consent 
                                </Typography>
                            </CardContent>
                        </Card>
                    </FormControl>
                    
                </form>
                
            </div>
        );
    }
}

export default compose(withWidth())(step7Component);
