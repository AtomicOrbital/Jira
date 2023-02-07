import { Button, Input, Space, Table, Tag, message, Popconfirm, Avatar, Popover, AutoComplete } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, } from '@ant-design/icons'
import ReactHtmlParser from 'react-html-parser';
import { EditOutlined, FormOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import EditForm from '../../components/EditForm/EditForm';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
}

export default function ProjectManagement(props) {
    // console.log("props", props)
    const projectList = useSelector(state => state.ProjectJiraReducer.projectList);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const { userSearch } = useSelector(state => state.UserLoginReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_ALL_PROJECT_JIRA'
        })
    }, [])

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const setIdSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'id',
        });
    };
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            // filteredValue: filteredInfo.name || null,
            // onFilter: (value, record) => record.id.includes(value),
            sorter: (item2, item1) => {
                return item2.id - item1.id;
            }
            // sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
            // ellipsis: true,
        },
        {
            title: 'creator',
            // dataIndex: 'creator',
            key: 'creator',
            sorter: (item2, item1) => {
                let creator1 = item1.creator?.name.trim().toLowerCase();
                let creator2 = item2.creator?.name.trim().toLowerCase();
                if (creator2 < creator1) {
                    return -1;
                }
                return 1;
            },
            render: (text, record, index) => {
                console.log(record);
                return <Tag color={'green'}>{record.creator?.name}</Tag>
            }
        },
        {
            title: 'members',
            key: 'members',
            render: (text, record, index) => {
                // console.log("record", record)
                return <Fragment>
                    {record.members?.slice(0, 3).map((member, index) => {
                        return <Avatar src={member.avatar} key={index} />
                    })}
                    {record.members?.length > 3 ? <Avatar>...</Avatar> : ''}
                    <Popover placement="right" title={"Add user"} content={() => {
                        return <AutoComplete

                            options={userSearch.map((user, index) => {
                                return { label: user.name, value: user.userId.toString() }
                            })}

                            value={value}

                            onChange={(text) => {
                                setValue(text);
                            }}

                            onSelect={(valueSelect, option) => {
                                // console.log('userId', value);
                                // console.log('option', option);
                                //set giá trị của popup khi được hiện thị lên
                                setValue(option.label);
                                dispatch({
                                    type:'ADD_USER_API',
                                    userProject: {
                                        "projectId": record.id,
                                        "userId" : valueSelect
                                    }
                                })
                            }}

                            onSearch={(value) => {
                                dispatch({
                                    type: 'GET_USER_API',
                                    keyWord: value
                                })
                            }} style={{ width: '100%', height: '100%' }} />
                    }} trigger="click">
                        <Button style={{ borderRadius: '50%', fontSize: '7px' }}>
                            <PlusOutlined />
                        </Button>
                    </Popover>
                </Fragment>
            }
        },
        {
            title: 'projectName',
            dataIndex: 'projectName',
            key: 'projectName',
            sorter: (item2, item1) => {
                let projectName1 = item1.projectName?.trim().toLowerCase();
                let projectName2 = item2.projectName?.trim().toLowerCase();
                if (projectName2 < projectName1) {
                    return -1;
                }
                return 1;
            },
            sortDirection: ['descend'],
            render: (text, record, index) => {
                // console.log("record", record);
                // console.log("text", text);
                return <NavLink className='text-decoration-none' to={`/projectdetail/${record.id}`}>{text}</NavLink>
            }
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
            // filteredValue: filteredInfo.description || null,
            // onFilter: (value, record) => record.description.includes(value),
            sorter: (a, b) => a.description.length - b.description.length,
            // sortOrder: sortedInfo.columnKey === 'description' ? sortedInfo.order : null,
            // ellipsis: true,
            render: (text, record, index) => {
                return ReactHtmlParser(text);
            }
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => {
                return <div>
                    <button onClick={() => {
                        dispatch({
                            type: 'OPEN_FORM_EDIT_PROJECT',
                            title: 'Edit Project',
                            Component: <EditForm />
                        })
                        //dispatch dữ liệu dòng hiện tại lên reducer
                        dispatch({
                            type: 'EDIT_PROJECT',
                            projectEditModal: record
                        })
                    }} className='btn mr-2 btn-primary'>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => {
                            dispatch({
                                type: 'DELETE_PROJECT_JIRA',
                                projectId: record.id
                            })
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>

                </div>
            }
        }
    ];
    return (
        <div className='container-fluid mt-5'>
            <h3>Project Management</h3>

            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setIdSort}>Sort projectName</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table rowKey={"id"} columns={columns} dataSource={projectList} onChange={handleChange} />
        </div>
    )
}
