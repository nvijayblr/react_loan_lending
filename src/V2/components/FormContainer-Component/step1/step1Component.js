import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Radio from '@material-ui/core/Radio';

class step1Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {selectedType: ""};
        
        this.radioHandler = this.radioHandler.bind(this);
    }
    
    radioHandler(event){
        let _temVar = this.state;
        _temVar["selectedType"] = event.target.value
        this.setState(_temVar)
    }
    
    render(){
        return (
            <div className="formContainer">
                <span className={this.state.selectedType === "onlyMe"?"customCheckBox checked":"customCheckBox"}>
                    Me Only (no co-borrowser)
                    <Radio className="radioStyle"
                      checked={this.state.selectedType === "onlyMe"}
                      onChange={this.radioHandler}
                      value="onlyMe"
                      name="apply-type-radio"
                    />
                </span>
        <br />
                <span className={this.state.selectedType === "only&other"?"customCheckBox checked":"customCheckBox"}>
                    Me and Co-Borrowser
                    <Radio className="radioStyle"
                      checked={this.state.selectedType === "only&other"}
                      onChange={this.radioHandler}
                      value="only&other"
                      name="apply-type-radio"
                    />
                </span>
            </div>
        );
    }
}

export default compose(withWidth())(step1Component);

/*{
, 
                    this.props.currentStep < this.props.totalSteps && 
                    <Button variant="outlined" color="primary" style={{"width": "300px"}} onClick={this.props.nextStep} >Save & Continue</Button>
                }*/