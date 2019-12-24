import React,{useState} from 'react';
import {Form, Input, InputNumber} from 'antd';

const MainItemForm = () => {
    const [itemNumber, setItemNumber] = useState(0);
    return (
        <>
        <InputNumber required  size="medium" min={1} max={10} defaultValue={1} />
        <Form onSubmit={onSubmit}>
            <InputNumber required  size="medium" min={1} max={10} defaultValue={1} />
        </Form>
        </>    
    )
}

export default MainItemForm