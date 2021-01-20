import React, { useState } from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    return (
        <Aux>
            <Toolbar clicked={() => setShowSideDrawer(!showSideDrawer)}/>
            <SideDrawer open={showSideDrawer} closed={() => setShowSideDrawer(false)}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}
    


export default Layout;