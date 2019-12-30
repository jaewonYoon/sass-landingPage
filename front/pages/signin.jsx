import React, {useEffect} from 'react';
import Router from 'next/router'; 
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'antd';

import SignUpForm  from '../components/SignUpForm.Component';
import SignInForm  from '../components/SignInForm.Component'; 
import './signIn.styles.scss';
const SignIn = () => {
    const dispatch = useDispatch();
    const {me} = useSelector(selector => selector.user); 
    useEffect( () => {
        console.log(me);
        if(me){
            alert('로그인 했으니 메인 페이지로 이동합니다.');
            Router.push('/'); 
        }
    }, [me && me.id])
    return (
        <>
            <Row    
                gutter={48}
                className="sign-in-row"
            >
                <Col xs={12} md ={10}>
                    <SignInForm/>
                </Col>
                <Col xs={0} md={4}></Col>
                <Col xs={12} md={10}>
                    <SignUpForm/>
                </Col>
                <Col ></Col>
            </Row>
        </>
    )
};

export default SignIn; 