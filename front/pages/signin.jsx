import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'antd';

import SignUp from '../components/SignUpForm.Component'; 
const SignIn = () => {
    const dispatch = useDispatch();
    const user = useSelector(selector => selector.user); 
    useEffect( () => {
        console.log(user); 
    })
    return (
        <>
            <Row 
                gutter={72}
                className={signInRow}
            >
                <Col xs={12} md ={10}>
                    <SignUp/>
                </Col>
                <Col xs={0} md={4}></Col>
                <Col xs={12} md={10}>
                    SignUp
                </Col>
                <Col ></Col>
            </Row>
        </>
    )
};

export default SignIn; 