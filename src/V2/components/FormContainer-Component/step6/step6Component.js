import React from 'react';
import '../FormContainerComponent.css';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

class step6Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {aceBank: false, zoomBank: false, ecuBank: false, amount1: false, amount2: false, amount3: false, loanBank1: false, loanBank2: false, loanBank3: false};
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event, value){
        let _temVar = this.state;
        _temVar[event.target.name] = !_temVar[event.target.name];
        this.setState(_temVar);
    }
    
    render(){
        return (
            <div className="formContainer">
                <form autoComplete="off">
                    <FormControl fullWidth className="customSlider">
                        <Typography>
                            Your credit file indicates that you have an auto loan, opened around January, 2003. Who is he credit provider for this loan?
                        </Typography>
                    </FormControl>
                    
                    <FormControl fullWidth className="customSlider" style={{"paddingTop": "10px"}} >
                        <Table>
                            <TableBody className="borderNone zeroPaddingTBL">
                                <TableRow>
                                    <TableCell>
            
                                        <Card className={this.state.aceBank ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    Ace Bank
                                                    <Checkbox className="policyCheckBox" checked={this.state.aceBank} onChange={this.handleChange} name="aceBank" value="checkedB" color="primary" />
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                    </TableCell>
                                    <TableCell>

                                        <Card className={this.state.zoomBank ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    Zoom Bank
                                                    <Checkbox className="policyCheckBox" checked={this.state.zoomBank} onChange={this.handleChange} name="zoomBank" value="checkedB" color="primary" />
                                                </Typography>

                                            </CardContent>
                                        </Card>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </FormControl>
            
                    <FormControl fullWidth className="customSlider" style={{"paddingTop": "10px"}}>
                        
                        <Card className={this.state.ecuBank ? "policyCheckCnt checked" : "policyCheckCnt"}>
                            <CardContent>
                                <Typography className="textAlignLeft" style={{"fontWeight": "600", "letterSpacing": "1px"}}>
                                    Employees Credit Union
                                    <Checkbox className="policyCheckBox" checked={this.state.ecuBank} onChange={this.handleChange} name="ecuBank" value="checkedB" color="primary" />
                                </Typography>
                            </CardContent>
                        </Card>
                        
                    </FormControl>
            
                    <hr className="hrGap" />
                    
                    <FormControl fullWidth className="customSlider">
                        <Typography>
                            What is the monthly payment for the auto loan mentioned above?
                        </Typography>
                    </FormControl>
                    
                    <FormControl fullWidth className="customSlider" style={{"paddingTop": "10px"}} >
                        <Table>
                            <TableBody className="borderNone zeroPaddingTBL">
                                <TableRow>
                                    <TableCell>
            
                                        <Card className={this.state.amount1 ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    $350-$400
                                                    <Checkbox className="policyCheckBox" checked={this.state.amount1} onChange={this.handleChange} name="amount1" value="checkedB" color="primary" />
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                    </TableCell>
                                    <TableCell>

                                        <Card className={this.state.amount2 ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    $400-$550
                                                    <Checkbox className="policyCheckBox" checked={this.state.amount2} onChange={this.handleChange} name="amount2" value="checkedB" color="primary" />
                                                </Typography>

                                            </CardContent>
                                        </Card>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
            
                                        <Card className={this.state.amount3 ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    $550-$700
                                                    <Checkbox className="policyCheckBox" checked={this.state.amount3} onChange={this.handleChange} name="amount3" value="checkedB" color="primary" />
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                    </TableCell>
                                    <TableCell>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </FormControl>
            
                    <hr className="hrGap" />
            
                    <FormControl fullWidth className="customSlider">
                        <Typography>
                            Your credit score indicates that you have a mortage loan, opened around January, 2003. Who is he credit provider for this loan?
                        </Typography>
                    </FormControl>
                    
                    <FormControl fullWidth className="customSlider" style={{"paddingTop": "10px"}} >
                        <Table>
                            <TableBody className="borderNone zeroPaddingTBL">
            
                                <TableRow>
                                    <TableCell>
                                        <Card className={this.state.loanBank1 ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    Bob's Bank
                                                    <Checkbox className="policyCheckBox" checked={this.state.loanBank1} onChange={this.handleChange} name="loanBank1" value="checkedB" color="primary" />
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </TableCell>
                                </TableRow>
            
                                <TableRow>
                                    <TableCell>
                                        <Card className={this.state.loanBank2 ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    Joe's Bank
                                                    <Checkbox className="policyCheckBox" checked={this.state.loanBank2} onChange={this.handleChange} name="loanBank2" value="checkedB" color="primary" />
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </TableCell>
                                </TableRow>
            
                                <TableRow>
                                    <TableCell>
                                        <Card className={this.state.loanBank3 ? "policyCheckCnt checked" : "policyCheckCnt"}>
                                            <CardContent>
                                                <Typography className="textAlignLeft">
                                                    People's Credit Union
                                                    <Checkbox className="policyCheckBox" checked={this.state.loanBank3} onChange={this.handleChange} name="loanBank3" value="checkedB" color="primary" />
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </TableCell>
                                </TableRow>
            
                            </TableBody>
                        </Table>
                    </FormControl>
            
                </form>
                
            </div>
        );
    }
}

export default compose(withWidth())(step6Component);
