import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


class step3Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {selectedType: "", state: ""};
        this.state.cityList = [];
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.props.inputOnChange(event);
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
                    <FormControl fullWidth>
                        <TextField id="phoneNumber" label="Mobile Phone Number" margin="dense" fullWidth name="CellPhoneNumber" onChange={this.handleChange} />
                    </FormControl>
            
                    <FormControl fullWidth>
                        <TextField id="secondPhoneNumber" label="Second Phone Number (optional)" margin="dense" fullWidth name="CellSecondPhoneNumber" onChange={this.handleChange} />
                    </FormControl>
                    
                    <FormControl fullWidth>
                        <TextField id="email" label="Email Address" margin="dense" fullWidth name="ApplicantEmail" onChange={this.handleChange} />
                    </FormControl>
            
                </form>
                
            </div>
        );
    }
}

export default compose(withWidth())(step3Component);

/*{
, 
                    this.props.currentStep < this.props.totalSteps && 
                    <Button variant="outlined" color="primary" style={{"width": "300px"}} onClick={this.props.nextStep} >Save & Continue</Button>
                }*/