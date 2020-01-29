import React, {FC} from 'react';
import {styled, css} from 'styled-components';
import Announce from './Announce';
import Info from './Info';
import Test from './Test';

export const Landing :FC = () => {
    return(
        <>
            <Announce/>
            <Info/>
            <Test/>
        </>        
    )
}

export default Landing;