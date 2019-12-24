import React from 'react';
import {Row, Col, Form, Input} from 'antd';
import ImageComponent from './Image.Component';  
import ItemForm from './ItemForm.Component';
const MainItem  = () => {
    const url = "/img/bottle.png"
    return(
        <>
            <div className="mainitem-container">
               <Row>
                    <Col span={10} >
                        <ImageComponent url={url} /> 
                    </Col>
                    <Col span={10} >
                            <ItemForm />
                    </Col>
                </Row> 
            </div>
        </>
    )
}

export default MainItem; 