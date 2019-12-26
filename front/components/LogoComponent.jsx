import React from 'react';
import styled from 'styled-components'; 
const LogoContainer = styled.div`
    display: table;
`;
const LogoImg = styled.img`
    width: 100px;
    height: 40px;
    margin: 10px;
`;
const LogoComponent = () => {
    return (
        <LogoContainer>
            <LogoImg src="/img/logo.png" style={{
                width: '100px',
                height: '40px',
                margin: '10px'
            }}/>
        </LogoContainer>
    )
}
export default LogoComponent;