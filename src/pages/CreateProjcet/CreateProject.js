import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useEffect } from 'react';
import { withFormik } from 'formik';


function CreateProject(props) {
    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory);

    // console.log('arrProjectCategory', arrProjectCategory);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_PROJECT_CATEGORY_SAGA'
        })
    }, [])

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

    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content);
    }

    return (
        <div className='container m-3'>
            <h3>CreateProject</h3>
            <form className='container' onSubmit={handleSubmit} onChange={handleChange}>
                <div className='form-group'>
                    <p>Name</p>
                    <input className='form-control' name='projectName' />
                </div>
                <div className='form-group'>
                    <p>Description</p>
                    <Editor
                        name='description'
                        // onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
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
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <div className='form-group'>
                    <select className="custom-select custom-select-lg mb-3" name='categoryId' onChange={handleChange}>
                        {arrProjectCategory.map((item, index) => {
                            return <option value={item.id} key={index}>{item.projectCategoryName}</option>
                        })}
                    </select>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Create project</button>
            </form>
        </div>
    )
}

const createProjectForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        console.log('propvalue', props);
        return {
            projectName: '',
            description: '',
            categoryId: props.arrProjectCategory[0]?.id
        }
    },

    // validateYupSchema: Yup.object().shape({

    // }),

    handleSubmit: (values, { props, setSubmitting }) => {
        console.log('props', values)
        props.dispatch({
            type: 'CREATE_PROJECT_JIRA',
            newProject: values
        })
    },
    displayName: 'CreateProjectFormik',
})(CreateProject);

const mapStateToProps = (state) => ({
    arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory
})


export default connect(mapStateToProps)(createProjectForm);