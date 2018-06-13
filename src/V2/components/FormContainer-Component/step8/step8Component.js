import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ModalComponent from './modal/ModalComponent'

class step8Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    handleChange(event, value){
        let _temVar = this.state;
        _temVar[event.target.name] = !_temVar[event.target.name];
        this.setState(_temVar);
    }
    
    handleOpen(){
        this.setState({ open: true });
    }
    
    handleClose(){
        this.setState({ open: false });
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
            
                    <FormControl fullWidth>
                        <img src={require("../../../assets/img/signature&circle.png")} alt="Sign-Document" width="100" style={{"margin": "auto"}} />
                        <Typography className="highlight-infoText">
                            Please complete signing your loan document 
                        </Typography>
                    </FormControl>
            
                    <FormControl fullWidth>
                        
                        
                        
                        

                        <Button variant="outlined" color="primary" className="authorizationBtn" onClick={this.props.nextStep} >
                            <img src={require("../../../assets/icon/file-icon.jpg")} alt="ICON"/>
                            Sign Loan Documents
                        </Button>
                        
                    </FormControl>
            
                    
                    
                </form>
                
                <ModalComponent open={this.state.open} handleClose={this.handleClose} />
                    
            </div>
        );
    }
}

export default compose(withWidth())(step8Component);
