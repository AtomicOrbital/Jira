import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const { Option } = Select;
export default function DrawerJira() {
    const dispatch = useDispatch();

    const { visible, ComponentContentDrawer, callBackSubmit, title } = useSelector(state => state.DrawerReducer)
    const showDrawer = () => {
        dispatch({
            type: 'OPEN_DRAWER'
        })
    };
    const onClose = () => {
        dispatch({
            type: 'CLOSE_DRAWER'
        })
    };
    return (
        <div>
            <>
                <Drawer
                    title={title}
                    width={720}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{
                        paddingBottom: 80
                    }}
                    extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={callBackSubmit} type="primary">
                                Submit
                            </Button>
                        </Space>
                    }
                >
                    {ComponentContentDrawer}
                </Drawer>

            </>
        </div>
    )
}
