import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PlusOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useDispatch } from 'react-redux';
import CreateTaskForm from '../EditForm/CreateTaskForm';
const { Header, Sider, Content } = Layout;
export default function SidebarJiraClone() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    style={{
                        textAlign: 'center',
                        color: '#fff',
                        marginBottom: '5px',
                        fontSize: '20px'
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </div>
                {/* <div className="logo" /> */}
                <Menu
                    onClick={() => {
                        dispatch({
                            type:'OPEN_FORM_CREATE_TASK',
                            Component: <CreateTaskForm />,
                            title: 'Create task'
                        })
                    }}  
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <PlusOutlined />,
                            label: 'Create issue',
                        },
                        {
                            key: '2',
                            icon: <SearchOutlined />,
                            label: 'Search issue',
                        },
                    ]}
                />
            </Sider>
        </Layout>
    )
}
