import { Button } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react'
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

export const UserLoginTemplate = (props) => {
    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Layout>
                <Sider width={window.innerWidth / 2} style={{ backgroundImage: 'url(https://picsum.photos/800/800)', height:window.innerHeight, backgroundSize: '100%' }}>

                </Sider>
                <Content>
                    <Component {...propsRoute} />
                </Content>
            </Layout>

        </Fragment>
    }} />
}
