import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Menu/Menu';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Menu clicked={props.clicked}/>
            <Logo height="80%"/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolbar;
