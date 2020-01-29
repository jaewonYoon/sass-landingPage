import React,{ReactNode,FC} from 'react';
import Navigation from './Navigation';
import './appLayout.scss'; 

interface AppProps{
    children : ReactNode
}

const AppLayout: FC<AppProps> = (props: AppProps) => {
    const {children}  = props;     
    return (
        <>
            <Navigation/>
            {children}
        </>
    );
}

export default AppLayout; 