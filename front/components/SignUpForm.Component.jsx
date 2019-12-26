import React,{useEffect, useState} from 'react';
import {Form,Input} from 'antd';
import {useInput} from './ItemForm.Component';
// export const useInput = (initValue=null) => {
//     const [value,setter] = useState(initValue);
//     const handler = useCallback( (e) => {
//         setter(e);
//     }, []);
//     return [value, handler]; 
// }


const SignUp = () => {
    const [id,onChangeId] =useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, onChangePasswordCheck] = useInput(''); 
    const [checkTerm, onChangeCheckTerm] = useInput('');
    return(
        <>
            <Form>
                <label htmlFor={id}>아이디</label>
                <Input type="text" id='id' onChange={onChangeId} ></Input>
                <label htmlFor='password'>비밀번호</label>
                <Input type="password" id='password' onChange={onChangePassword} ></Input>
                <label htmlFor='passwordCheck'>비밀번호 확인 </label>
                <Input type="password" id='passwordCheck' onChange={onChangePasswordCheck} ></Input>
                <label htmlFor='checkbox'>회원가입 약관에 동의합니다.</label>
                <Input type="checkbox" id ='checkTerm' onChange={onChangeCheckTerm} ></Input>
            </Form>
        </>
    )
}

export default SignUp;