import React from 'react';
import {useSelector} from 'react-redux'; 
import {Layout, Menu, BreadCrumb} from 'antd'; 
import Link from 'next/link';

import LogoComponent from './LogoComponent'; 
import './Navigation.scss';


const {Header, Content, Footer} = Layout;

const Navigation = () => {
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
                    <Menu.Item key="4">
                        <Link href="/signIn"><a>로그인</a></Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}

export default Navigation;