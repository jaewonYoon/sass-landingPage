import React,{useState, useCallback,useEffect} from 'react';
import {Form, Input, InputNumber,Button} from 'antd';
import './ItemForm.styles.scss';
export const useInput = (initValue=null) => {
    const [value,setter] = useState(initValue);
    const handler = useCallback( (e) => {
        setter(e);
    }, []);
    return [value, handler]; 
}

const ItemForm = () => {
    const [itemNumber, onChangeItemNumber] = useInput(1);
    const [price, onChangePrice] = useInput(3500);
    
    useEffect(useCallback(() => {
        onChangePrice(itemNumber*10000 + 3500)
    },[itemNumber])
    );
    return (
        <>
            <div className="item-form-container">
                <Form className="item-form">
                    <label htmlFor="quantity">세트 갯수</label>
                    <InputNumber size="large" min={1} max={10} defaultValue={1} onChange={onChangeItemNumber} />
                    <label htmlFor="transport">배송료</label>
                    <Input disabled value={'3500원'}/>
                    <label htmlFor="price">총 금액</label>
                    <div id="price">{`${price}원`}</div>
                    <Button type="primary" className="button-primary">구매</Button>
                </Form>
            </div>
        </>    
    )
}

export default ItemForm;