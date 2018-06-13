import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class step2Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {selectedType: "", State: ""};
        this.state.cityList = [];
        
        this.radioHandler = this.radioHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    radioHandler(event){
        let _temVar = this.state;
        _temVar["selectedType"] = event.target.value
        this.setState(_temVar);
        console.log(event.target.value);    
    }
    
    handleChange(event){
        let _temVar = this.state;
        _temVar[event.target.name] = event.target.value
        this.setState(_temVar);
        this.props.inputOnChange(event);
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
                    <FormControl fullWidth>
                        <TextField id="firstName" label="First Name" margin="dense" fullWidth name="FirstName" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="middleName" label="Middle Name" margin="dense" fullWidth name="MiddleName" onChange={this.handleChange} />
                    </FormControl>
                    
                    <FormControl fullWidth>
                        <TextField id="lastName" label="Last Name" margin="dense" fullWidth name="LastName" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="currentAddress1" label="Current Address Line 1 (No P.O.Boxes)" margin="dense" fullWidth name="POBox" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="currentAddress2" label="Current Address Line 2 (optional)" margin="dense" fullWidth name="StreetName" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="city" label="City" margin="dense" fullWidth name="City" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <InputLabel htmlFor="name-disabled">State</InputLabel>
                        <Select value={this.state.State} onChange={this.handleChange} name="State" fullWidth onChange={this.handleChange} >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'State1'}>State1</MenuItem>
                            <MenuItem value={'State2'}>State2</MenuItem>
                            <MenuItem value={'State3'}>State2</MenuItem>
                        </Select>
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="zipCode" label="Zip Code" margin="dense" fullWidth name="ZipCode" onChange={this.handleChange} />
                    </FormControl>
                </form>
                
            </div>
        );
    }
}

export default compose(withWidth())(step2Component);

/*{
, 
                    this.props.currentStep < this.props.totalSteps && 
                    <Button variant="outlined" color="primary" style={{"width": "300px"}} onClick={this.props.nextStep} >Save & Continue</Button>
                }*/