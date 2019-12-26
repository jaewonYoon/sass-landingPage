import React from 'react';
import Navigation from './Navigation';
import './appLayout.scss'; 
const AppLayout = ({children}) => {
    return (
        <>
            <Navigation/>
            {children}
        </>
    );
}

export default AppLayout; 