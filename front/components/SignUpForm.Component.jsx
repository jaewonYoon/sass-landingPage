import React,{useCallback,useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {Form,Input,Checkbox, Icon, Button} from 'antd';
import {SIGN_UP_REQUEST} from '../reducers/user'; 
export const useInput = (initValue=null) => {
    const [value,setter] = useState(initValue);
    const handler = useCallback( (e) => {
        setter(e.target.value);
    }, []);
    return [value, handler]; 
}

const SignUp = (props) => {
    const [id,onChangeId] =useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, onChangePasswordCheck] = useInput(''); 
    const [checkTerm, onChangeCheckTerm] = useInput('');
    const [passwordError, setpasswordError] = useInput('');
    const [confirmDirty, setConfirmDirty] = useInput('');
    
    const {isSigningUp} = useSelector(selector => selector.user); 
    const {getFieldDecorator} = props.form; 
    
    const dispatch = useDispatch(); 
    useEffect( (e) => {
        console.log(`isSigningUp: ${isSigningUp}`);
    },[isSigningUp]);

    const onSubmit = useCallback((e) => {
             e.preventDefault(); 
             if(!(id && password && passwordCheck)) {
                 return false; 
             }
             console.log({
                 id,
                 password,
                 passwordCheck,
                 checkTerm
             })
             dispatch({
                type:SIGN_UP_REQUEST   
             })
    },[id,password,passwordCheck,checkTerm]);
    
    const compareToFirstPassword = (rule, value, callback) => {
        const {form} = props; 
        if(value && form && value!== form.getFieldValue('password')) {
            callback('비밀번호가 일치하지 않습니다!');
        } else {
            callback();
        }
    }

    const validateToNextPassword = (rule, value, callback) => {
        const {form} = props;
        if(value && form && confirmDirty) {
            form.validateFields(['confirm'], {force: true})
        }
        callback();
    }

    return(
        <>
            <Form onSubmit={onSubmit}>
                <Form.Item label="이메일">
                    {
                        getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: '올바른 이메일 형식이 아닙니다.'
                                },
                                {
                                    required: true,
                                    message: '이메일을 입력해주세요.'
                                },
                            ]
                        })(<Input
                            placeholder="E-mail"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={onChangeId}
                            />)
                    }
                </Form.Item >
                <Form.Item label="비밀번호" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '비밀번호를 입력하세요'
                            },
                            {
                                validator: validateToNextPassword
                            },
                        ]
                    })(<Input.Password 
                        placeholder="Password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange = {onChangePassword}
                        />)}
                </Form.Item>
                <Form.Item label="비밀번호 확인" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: '비밀번호를 다시 입력하세요'
                            },
                            {
                                validator: compareToFirstPassword
                            }
                        ]
                    })(<Input.Password  
                        placeholder="Password Check"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange = {onChangePasswordCheck}
                    />)}
                </Form.Item>
                <label htmlFor='checkbox'>회원가입 약관에 동의합니다.</label>
                <Checkbox required id ='checkTerm' onChange={onChangeCheckTerm} />
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        style={{float: 'right'}}
                        loading={isSigningUp}
                    >등록</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Form.create({name:'signUp'})(SignUp);