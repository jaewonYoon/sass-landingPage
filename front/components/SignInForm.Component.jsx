import React,{useCallback,useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {Form,Input,Checkbox, Icon, Button} from 'antd';
import {LOG_IN_REQUEST} from '../reducers/user'; 
export const useInput = (initValue=null) => {
    const [value,setter] = useState(initValue);
    const handler = useCallback( (e) => {
        setter(e.target.value);
    }, []);
    return [value, handler]; 
}

const SignInForm = (props) => {
    const [id,onChangeId] =useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordError, setpasswordError] = useInput('');
    const [confirmDirty, setConfirmDirty] = useInput('');
    
    const {isLoading} = useSelector(selector => selector.user); 
    const {getFieldDecorator} = props.form; 
    
    const dispatch = useDispatch(); 
    useEffect( (e) => {
    },[]);

    const onSubmit = useCallback((e) => {
             e.preventDefault(); 
             if(!(id && password)) {
                 return false; 
             }
             dispatch({
                type:LOG_IN_REQUEST   
             })
    },[id,password]);
    
    const passwordValidate = (rule, value, callback) => {
        const {form} = props;
        if(value && form && form.getFieldValue('password').length < 4){
            callback('비밀번호를 올바르게 입력해주세요.');
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
                                validator: passwordValidate 
                            }
                        ]
                    })(<Input.Password 
                        placeholder="Password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange = {onChangePassword}
                        />)}
                </Form.Item>
                <Form.Item>
                    <Button
                        className='submit-btn'
                        type="primary" 
                        htmlType="submit" 
                        style={{float: 'right'}}
                        loading={isLoading}
                    >로그인</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Form.create({name:'signIn'})(SignInForm);