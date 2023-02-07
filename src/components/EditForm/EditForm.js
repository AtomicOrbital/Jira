import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
const { Option } = Select;
function EditForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues,
        setFieldValue
    } = props;
    const { arrProjectCategory } = useSelector(state => state.ProjectCategoryReducer);

    const dispatch = useDispatch();
    // const submitForm = (e) => {
    //     e.preventDefault();
    //     alert("submit");
    // }

    useEffect(() => {
        dispatch({
            type: 'GET_PROJECT_CATEGORY_SAGA'
        });

        dispatch({
            type: 'SET_SUBMIT_EDIT_PROJECT',
            submitFunction: handleSubmit
        });
    }, [])

    // const handleEditorChange = (content, editor) => {
    //     setFieldValue('description', content);
    // }

    return (
        <Fragment>
            <Form onSubmit={handleSubmit} layout="vertical">
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="ProjectId"
                        >
                            <Input value={values.id} disabled name='id' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Project Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter url',
                                },
                            ]}
                        >
                            <Input
                                name='projectName'
                                value={values.projectName}
                                onChange={handleChange}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <p>Description</p>
                        <Editor
                            name='description'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            initialValue={values.description}     
                                                  
                            init={{
                                selector: 'textarea#myTextArea',
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            // onEditorChange={handleEditorChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a category',
                                },
                            ]}  
                        >
                            <Select value={values.categoryName} name="categoryId" placeholder="Please select a category">
                                {arrProjectCategory?.map((item, index) => {
                                    return <Option key={index} value={item.id}>
                                        {item.projectCategoryName}
                                    </Option>
                                })}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    )
}


const EditProjectForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        console.log('propvalue', props.projectEdit);
        const { projectEdit } = props;
        return {
            id: projectEdit?.id,
            projectName: projectEdit.projectName,
            description: projectEdit.description,
            categoryId: projectEdit.categoryId
        }
    },

    // validateYupSchema: Yup.object().shape({

    // }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // console.log('values', values);
        props.dispatch({
            type: 'UPDATE_PROJECT_JIRA',
            projectUpdate: values
        })
    },
    displayName: 'EditProjectFormik',
})(EditForm)

const mapStateToProps = (state) => ({
    projectEdit: state.ProjectReducer.projectEdit
})


export default connect(mapStateToProps)(EditProjectForm);