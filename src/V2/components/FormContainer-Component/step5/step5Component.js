import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

let customEvent = {target: {}};

class step5Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {loanAmont: 20000, loanDuration: 24};
        
        customEvent.target.name = "LoanAmount";
        customEvent.target.value = this.state.loanAmont;
        this.props.inputOnChange(customEvent);
        
        customEvent.target.name = "LoanDuration";
        customEvent.target.value = this.state.loanDuration;
        this.props.inputOnChange(customEvent);
        
        this.handleLoanAmountChange = this.handleLoanAmountChange.bind(this);
        this.handleLoanDurationChange = this.handleLoanDurationChange.bind(this);
        
    }
    
    handleLoanAmountChange(event, value){
        let _temVar = this.state;
        _temVar.loanAmont = value;
        this.setState(_temVar);
        
        customEvent.target.name = "LoanAmount";
        customEvent.target.value = value;
        this.props.inputOnChange(customEvent);
    }
    
    handleLoanDurationChange(event, value){
        let _temVar = this.state;
        _temVar.loanDuration = value;
        this.setState(_temVar);
        
        customEvent.target.name = "LoanDuration";
        customEvent.target.value = value;
        this.props.inputOnChange(customEvent);
    }
    
    roundOff(_value){
        return Math.floor(_value);
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
                    <FormControl fullWidth className="customSlider">
                        <Typography>Loan Amount: <span className="higlightText">$ {this.state.loanAmont}</span></Typography>
                        <Slider  value={this.state.loanAmont} min={1000} max={40000} step={1000} name="loanAmont" aria-labelledby="label" onChange={this.handleLoanAmountChange} />
                    </FormControl>
                    
                    <FormControl fullWidth className="customSlider">
                        <Typography>Repayment Terms: <span className="higlightText">{this.state.loanDuration} Months</span></Typography>
                        <Slider value={this.state.loanDuration} min={1} max={48} step={1} name="loanDuration" aria-labelledby="label" onChange={this.handleLoanDurationChange} />
                    </FormControl>
            
                    <hr className="hrGap" />
                    
                    <FormControl fullWidth>
                        <Typography style={{"fontSize": "20px", "color": "#9E9E9E"}}>Loan Details</Typography>
                        <Card className={this.state.policyCheck ? "policyCheckCnt checked" : "policyCheckCnt"}>
                            <CardContent style={{"padding": "5px"}}>
                                <Table>
            
                                    <TableBody className="borderNone">
            
                                        <TableRow>
                                            <TableCell>Loan Amount</TableCell>
                                            <TableCell>
                                                <span className="higlightText">
                                                    $ {this.state.loanAmont}
                                                </span>
                                            </TableCell>
                                        </TableRow>
            
                                        <TableRow style={{"backgroundColor": "#F5F5F5"}}>
                                            <TableCell>Loan Terms</TableCell>
                                            <TableCell>
                                                <span className="higlightText">
                                                    {this.state.loanDuration} Months
                                                </span>
                                            </TableCell>
                                        </TableRow>
            
                                        <TableRow>
                                            <TableCell>Monthly Payment</TableCell>
                                            <TableCell>
                                                <span className="higlightText">
                                                    $ {this.roundOff((((this.state.loanAmont * (8.99 / 100)) * ( this.state.loanDuration / 12)) + this.state.loanAmont) / this.state.loanDuration)}
                                                </span>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow style={{"backgroundColor": "#F5F5F5"}}>
                                            <TableCell>Annual Percentage Rate</TableCell>
                                            <TableCell>
                                                <span className="higlightText">
                                                    8.99%
                                                </span>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Total of Payments</TableCell>
                                            <TableCell>
                                                <span className="higlightText">
                                                    $ {this.roundOff((this.state.loanAmont * (8.99 / 100)) * ( this.state.loanDuration / 12)) + this.state.loanAmont}
                                                </span>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow style={{"backgroundColor": "#F5F5F5"}}>
                                            <TableCell>Total Interest</TableCell>
                                            <TableCell>
                                                <span className="higlightText">
                                                    $ {this.roundOff((this.state.loanAmont * (8.99 / 100)) * ( this.state.loanDuration / 12))}
                                                </span>
                                            </TableCell>
                                        </TableRow>
            
                                    </TableBody>
            
                                </Table>
                            </CardContent>
                        </Card>
                    </FormControl>
            
                </form>
                
            </div>
        );
    }
}

export default compose(withWidth())(step5Component);
