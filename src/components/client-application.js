import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import _ from 'lodash';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import withWidth from 'material-ui/utils/withWidth';

import {fetchClientApplication, changeStep} from '../actions/client-application-actions';

import TabbedPages from './form-components/tabbed-pages.js';
import { AppBar } from 'material-ui';
import ApplicationStepper from './form-components/application-stepper';
import ApplicationStep from './form-components/application-step';
import { FieldGenerator } from './input-components/form-renderer';
import { BuldValidationPage } from './util/form-validator'

const styles = {
    card: {
      minWidth: 275,
      marginBottom: 12
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginTop: "5%",
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0
    },
    logo: {
        maxHeight: "75px"
    },
    logoCentered: {
        display: 'block',
        margin_left: 'auto',
        margin_right: 'auto'
    },
    buttonPosition: {
        text_align: 'right',
        float: 'right',
        marginTop: 36
    }
};

class ClientApplication extends Component {
    constructor(props) {
        super(props);
        if (this.props.application.data)
            this.state = { data: { ...this.props.application.data }};
        else
            this.state = {};
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchClientApplication(id);
    }

    handlePrevious = () => {
        const {application:{activeStep},changeStep} = this.props;
        if (activeStep > 0)
        {
            changeStep(activeStep - 1);
        }
    };

    handleNext = () => {
        const {application: {activeStep, steps}, changeStep} = this.props;

        if (activeStep < steps.length && this.props.redux_form.valid)
        {
            changeStep(activeStep + 1);
        }
    };

    handleChange = (step) => {
        console.log("CHANGE");
        const {changeStep} = this.props;
        changeStep(step);
    }

    render() {
        const {application, classes, width, useTabs, } = this.props;
        const {data} = this.state;
        if (!application.fieldData)
        {
            console.log("Loading...");
            return <div>loading...</div>;
        }

        // Legacy tabbed page support
        if (useTabs) {
            return (
                <Grid container spacing={8} justify="center">
                    <Grid item xs={12} sm={10} md={8} className={`${classes.card} ${classes.title}`} align="center">
                        <img src={application.logo} alt="Company Logo" className={classes.logo} />
                    </Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        <PageGeneratorForm fieldData={application.fieldData} data={data} activeStep={application.activeStep} validator={BuldValidationPage(application.activeStep)} />
                    </Grid>
                </Grid>
            );
        }
        else {
            
            // New layout, based on screen breakpoints.
            switch(width) {
                case 'xs':
                case 'sm':
                    return (
                        <div>MOBILE</div>
                    );
                case 'md':
                case 'lg':
                case 'xl':
                default:
                    return (
                        <div>
                            <AppBar position="static" className={classes.pos} style={{margin: 0}}>
                                <div className={classes.logoCentered}>
                                    <img src={application.logo} alt="Company Logo" className={classes.logo} />
                                </div>    
                            </AppBar>
                            <Grid container spacing={16} justify="center">
                                <Hidden xsDown>
                                
                                    <Grid item xs={12} sm={2}>
                                        <ApplicationStepper steps={application.steps} />
                                    </Grid>
                                
                                </Hidden>
                                
                                <Grid item xs={12} sm={9}>
                                    <Paper>
                                            <ApplicationStep />
                                    </Paper>
                                        <Hidden xsDown>
                                            <div className={classes.buttonPosition}>
                                                <Button variant="raised" onClick={this.handlePrevious} >Go to Previous Step</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button variant="raised" color="primary" onClick={this.handleNext} >Save & Continue</Button>
                                            </div>
                                        </Hidden>
                                </Grid>
                            </Grid>
                        </div>
                    );
            }
        }
    }
}
ClientApplication.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps({application, application: {fieldData, activeStep}}) {
    const props = {application};
    // if (fieldData) {
    //     const validate = BuildValidationFunction(fieldData,activeStep);
    //     props['validate'] = validate;
    // }
    
    return props;
}


export default    connect(mapStateToProps,{fetchClientApplication, changeStep})(
        withWidth()(withStyles(styles)(ClientApplication))
    )

class PageGenerator extends React.Component {
    constructor(props) {
        super(props);
        const {fieldItem,data,handleFieldChange,activeStep} = props;
        this.state = {
            fieldItem, data, handleFieldChange, activeStep
        }
    }
    handleSubmit = (e) => {
        console.log(e);
        this.setState({activeStep: this.props.activeStep});
        console.log(this.state);
        console.log(this.props);
        //this.props.validate = BuldValidationPage(this.props.activeStep);
    }
    render() {
        const {data,handleFieldChange} = this.state;
        const {handleSubmit, activeStep, fieldData} = this.props;
        const tabItems = _.map(fieldData, section => {
            return { id: section.id, label: section.name, key: section.id };
        });
        return (
        <form onSubmit={handleSubmit(this.handleSubmit)}>
            <TabbedPages tabItems={tabItems}>
                {fieldData.map((fieldItem, index) => {
                    return (
                        <Paper key={`step${index}`} >
                            {fieldItem.fields.map(field => {
                                return (
                                    <div key={field.id} style={{text_align:"center"}}>
                                        <FieldGenerator field={field} data={data && data[field.id]} />
                                    </div>
                                )
                            })}
                        </Paper>
                    );
                })}
            </TabbedPages>
        </form>);
    }
}
function validate(values, props) {
    console.log("loading validation");
    return props.validator(props.fieldData,values);
}
function mapStatetoProps2(state) {
    const {application:{activeStep, fieldData}} = state;
    return {activeStep,fieldData, fieldItem: fieldData[activeStep]};
}

const PageGeneratorForm = reduxForm({
    validate,
    form: 'ClientApplicationForm' 
})(connect(mapStatetoProps2)(PageGenerator));