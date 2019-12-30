import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {Layout, Menu, BreadCrumb} from 'antd'; 
import Link from 'next/link';

import LogoComponent from './LogoComponent'; 
import './Navigation.scss';
import { LOG_OUT_REQUEST } from '../reducers/user';


const {Header, Content, Footer} = Layout;

const Navigation = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch({
            type:LOG_OUT_REQUEST
        });
    }
    const {me} = useSelector(selector => selector.user);
    return (
        <Layout className="layout">
            <Header style={{
                backgroundColor:`#143789`,
            }}>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{
                        lineHeight:'62px',
                        backgroundColor: `#143789`
                    }}
                >
                    <Menu.Item key="1">
                        <Link href="/"><a>
                        <LogoComponent/>
                        </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/smartstore"><a>스마트스토어</a></Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="/payment"><a>결제</a></Link>
                    </Menu.Item>
                    {me && me.id ? 
                    <Menu.Item key="4">
                        <a onClick={logOut}>로그아웃</a>
                    </Menu.Item>:
                    <Menu.Item key="5">
                        <Link href="/signIn"><a>로그인</a></Link>
                    </Menu.Item>}
                </Menu>
            </Header>
        </Layout>
    )
}

export default Navigation;