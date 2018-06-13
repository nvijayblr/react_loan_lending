import React from 'react';

import AppConfig from '../../resources/config.json';

import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

class FormStepsComponent extends React.Component{
    
    render(){
        return (
            <ListItem style={{"paddingTop": "5px", "paddingBottom": "10px"}}>
                <Avatar style={{"width": this.props.buttonContSize?this.props.buttonContSize:"30px", "height": this.props.buttonContSize?this.props.buttonContSize:"30px"}}>
                    <Button  variant="fab" color={this.props.buttonColor} aria-label="add" style={{"fontSize": this.props.buttonSize, "color": "#fff"}}>{this.props.stepNo}</Button>
                </Avatar>
                <ListItemText primary={this.props.title} style={{"fontSize": "14px"}} />
            </ListItem>
        );
    }
}

export default compose(withWidth())(FormStepsComponent);