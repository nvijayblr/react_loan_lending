import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

class step4Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {EmploymentStatus: "", policyCheck: false};
        
        this.handleChange = this.handleChange.bind(this);
        
    }
    
    handleChange(event){
        let _temVar = this.state;
        if(event.target.name === 'policyCheck')
            _temVar[event.target.name] = !_temVar[event.target.name];
        else
            _temVar[event.target.name] = event.target.value;
        this.setState(_temVar);
        this.props.inputOnChange(event);
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
                    <FormControl fullWidth>
                        <TextField id="securityNumber" label="Social Security Number" margin="dense" fullWidth name="SSN" onChange={this.handleChange} />
                    </FormControl>
                    
                    <FormControl fullWidth>
                        <TextField id="dob" label="Date of Birth" type="date" margin="dense" defaultValue="1980-01-01" InputLabelProps={{shrink: true}} fullWidth  name="DOB" onChange={this.handleChange}/>
                    </FormControl>
            
                    <hr className="hrGap" />
            
                    <FormControl fullWidth>
                        <InputLabel htmlFor="name-disabled">Employment Status</InputLabel>
                        <Select value={this.state.EmploymentStatus} onChange={this.handleChange} name="EmploymentStatus" fullWidth >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Employed'}>Employed</MenuItem>
                            <MenuItem value={'Business'}>Business</MenuItem>
                        </Select>
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="employerName" label="Employer Name" margin="dense" fullWidth name="EmployerName" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="empExperience" label="Years at this Employer" margin="dense" fullWidth name="EmployerYears" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="income" label="Monthly Gross Income" margin="dense" fullWidth name="grossmonthlyincome" onChange={this.handleChange} />
                    </FormControl>
                    
                    <hr className="hrGap" />
                    
                    <FormControl fullWidth className="authorizationCtn" >
                        <Button variant="outlined" color="primary" className="authorizationBtn" >
                            <img src={require("../../../assets/icon/file-icon.jpg")} alt="ICON"/>
                            Authorization to pull credit history
                        </Button>
                    </FormControl>

                    <FormControl fullWidth>
                        <Button variant="outlined" color="primary" className="authorizationBtn" >
                            <img src={require("../../../assets/icon/file-icon.jpg")} alt="ICON"/>
                            Electronic Communication Consent
                        </Button>
                    </FormControl>
                                      
                      <FormControl fullWidth>
                        <Button variant="outlined" color="primary" className="authorizationBtn" >
                            <img src={require("../../../assets/icon/file-icon.jpg")} alt="ICON"/>
                            Privacy Policy
                        </Button>
                    </FormControl>

                    <FormControl fullWidth>
                        <Card className={this.state.policyCheck ? "policyCheckCnt checked" : "policyCheckCnt"}>
                            <CardContent>
                                <Typography className="textAlignLeft">
                                    I agree to the above terms 
                                    <Checkbox className="policyCheckBox" checked={this.state.policyCheck} onChange={this.handleChange} name="policyCheck" value="checkedB" color="primary" />
                                </Typography>
                                <hr />
                                <Typography className="textAlignLeft"> 
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

export default compose(withWidth())(step4Component);


 /*checked={this.state.checkedB} onChange={this.handleChange('checkedB')} */