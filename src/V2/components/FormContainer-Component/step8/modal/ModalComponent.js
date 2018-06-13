import React from 'react';
import '../../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

class ModalComponent extends React.Component{
    /*constructor(props){
        super(props);
    }*/
    
    render(){
        return (
            <Modal open={this.props.open} className="modalContainer" >
                <div style={{"width": "100%"}}>
                    <div className="modalSignCnt">
                        <img src={require("../../../../assets/img/signature.png")} alt="Sign-Document" className="modalSignIcon" />
                        <Typography className="infoText">
                            Please complete signing your loan document 
                        </Typography>
                        <Typography className="infoText2">
                            If a new window did not open to sign the document. click here 
                        </Typography>

                        <Button variant="outlined" className="modalCloseBtn" color="primary" onClick={this.props.handleClose} >Cancel Signing</Button>
                    </div>
                    
                </div>
            </Modal>
        );
    }
}

export default compose(withWidth())(ModalComponent);
