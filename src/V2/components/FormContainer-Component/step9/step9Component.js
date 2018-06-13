import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class step9Component extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="formContainer">
                
                <div className="finalStepCnt">
                    <img src={require("../../../assets/img/holdingMoney.png")} alt="Congrats Image" /> 
                     <Typography className="bigHiglightText">
                        Thank You!
                     </Typography>
                    <Typography className="descText">
                        Your funding is on it's way! A copy of all loan document and terms has been sent to your email.
                     </Typography>
                    <Typography className="extraDetailsText">
                        Contact us for any questions you may have toll-free at (800) 123-4567.
                     </Typography>

                    <Button color="primary" className="backToWebsiteBtn" onClick={this.props.redirectHome}> Back to Website </Button>
                </div>
                    
            </div>
        );
    }
}

export default compose(withWidth())(step9Component);
