import React from 'react';

import AppConfig from '../../resources/config.json';

import styles from './HeaderComponentStyle';

/*import PropTypes from 'prop-types';*/
import compose from 'recompose/compose';
/*import { withStyles } from '@material-ui/core/styles';*/
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
/*import Typography from '@material-ui/core/Typography';*/
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withWidth from '@material-ui/core/withWidth';


class HeaderComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {anchorEl: null};
        
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.redirectHome = this.redirectHome.bind(this);
    }
    
    redirectHome(){
        this.props.history.push('/');
    }
    
    handleClick(event){
        this.setState({ anchorEl: event.currentTarget });
    }
    
    handleClose (){
        this.setState({ anchorEl: null });
    }
    
    render() {
        const { anchorEl } = this.state;
        
        return (
            <AppBar position="static" style={{"backgroundColor": "#FFF"}}>
                <Toolbar>
                
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6} style={(this.props.width === 'xs' || this.props.width === 'sm')?styles.logoStyle:styles.empty}>
                        <Hidden only={['md', 'lg', 'xl']}>
                                <IconButton className={styles.menuButton} style={{"color": AppConfig.Text_color, "float": "left"}} aria-label="Menu" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
                                    <MenuIcon />
                                    </IconButton>

                                <Menu
                                      id="simple-menu"
                                      anchorEl={anchorEl}
                                      open={Boolean(anchorEl)}
                                      onClose={this.handleClose}
                                    >
                              <MenuItem onClick={this.handleClose}>WEBSITE ITEM1</MenuItem>
                              <MenuItem onClick={this.handleClose}>WEBSITE ITEM2</MenuItem>
                              <MenuItem onClick={this.handleClose}>WEBSITE ITEM3</MenuItem>
                            </Menu>
                        </Hidden>
                      <img src={require("../../assets/img/logo.jpg")} alt="ACME" onClick={this.redirectHome} />
                    </Grid>
                                
                    <Grid item xs={12} md={6} style={{"color": AppConfig.Text_color}}>
                         <Hidden only={['xs', 'sm']}>
                             <Grid container spacing={24}>
                                  <Grid item style={styles.menuItem} xs={4}>WEBSITE ITEM1</Grid>
                                  <Grid item style={styles.menuItem} xs={4}>WEBSITE ITEM2</Grid>
                                  <Grid item style={styles.menuItem} xs={4}>WEBSITE ITEM3</Grid>
                              </Grid>
                         </Hidden>
                    </Grid> 
                    
                </Grid>
                </Toolbar>
            </AppBar>


        );
    }
    
}

export default compose(withWidth())(HeaderComponent);