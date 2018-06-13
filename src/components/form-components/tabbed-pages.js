import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isValid, startSubmit} from 'redux-form';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import {changeStep} from '../../actions/client-application-actions';

class TabbedPages extends React.Component {
    constructor(props) {
        super(props);
        if (props.tabItems) {
            this.state = { 
                tabItems: props.tabItems,
                value: 0
            };
        }
        else {
            this.state = {
                tabItems: [],
                value: 0
            };
        }
    }

    handleChange = (event, value) => {
        console.log(this.props.isValid);
        console.log(value);
        console.log(this.props.activeStep);
        if (this.props.isValid || value < this.props.activeStep)
            this.props.changeStep(value);
        else
            this.props.startSubmit('ClientApplicationForm');
        //this.setState({value});
    };

    render()
    {
        const {canMoveForward} = this.state;
        const {activeStep,children} = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Tabs
                        value={activeStep}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                    >
                        {this.state.tabItems.map(tab => {
                            return <Tab key={tab.id} type="submit" label={tab.label} disabled={canMoveForward} />
                        })}
                    </Tabs>
                </AppBar>
                {children && children[activeStep]}
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {application,application: {activeStep}} = state;
    return {activeStep,isValid: isValid('ClientApplicationForm')(state)};
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        startSubmit: startSubmit,
        changeStep
      }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TabbedPages);