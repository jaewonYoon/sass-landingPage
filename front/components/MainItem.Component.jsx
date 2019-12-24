import React,{useState} from 'react';
import {Row, Col, Form, Input} from 'antd';
import ImageComponent from './Image.Component';  
const MainItem  = () => {
    const url = "/img/bottle.png"
    return(
        <>
            <div className="mainitem-container">
               <Row>
                    <Col span={10}>
                        <ImageComponent url={url} /> 
                    </Col>
                    <Col span={10}>
                        <Form>
                            <Input>
                            </Input>
                        </Form>
                    </Col>
                </Row> 
            </div>
        </>
    )
}

export default MainItem; 