import { Editor } from '@tinymce/tinymce-react';
import { Select, Slider } from 'antd'
import useSelection from 'antd/es/table/hooks/useSelection';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function CreateTaskForm() {

    const { arrProject } = useSelector(state => state.ProjectJiraReducer);
    const { arrPriority } = useSelector(state => state.PriorityReducer);
    const { arrTaskType } = useSelector(state => state.TaskTypeReducer);
    const { userSearch } = useSelector(state => state.UserLoginReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_PROJECT_ALL_SAGA'
        });
        dispatch({
            type: 'GET_ALL_PRIORITY_SAGA'
        });
        dispatch({
            type: 'GET_ALL_TASK_TYPE_SAGA'
        });
        dispatch({
            type: 'GET_USER_API',
            keyWord: ''
        })
    }, [])

    const userOptions = userSearch.map((item, index) => {
        return { value: item.userId, label: item.name }
    })

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };

    const [size, setSize] = useState('middle');

    const handleEditorChange = (content, editor) => {
        // setFieldValue('description', content);
    }

    const [timeTracking, setTimeTracking] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0
    });

    return (
        <div className='container'>
            <div className='form-group'>
                <p>Project</p>
                <select className='form-control'>
                    {arrProject.map((project, index) => {
                        return <option key={index} value={project.id}>{project.projectName}</option>
                    })}
                </select>
            </div>
            <div className='form-group'>
                <div className="row">
                    <div className="col-6">
                        <p>Priority</p>
                        <select name="priorityId" className="form-control">
                            {arrPriority.map((priority, index) => {
                                return <option value={priority.priorityId} key={index}>{priority.priority}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-6">
                        <p>Task type</p>
                        <select className="form-control" name="typeId">
                            {arrTaskType.map((taskType, index) => {
                                return <option value={taskType.id} key={index}>{taskType.taskType}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='row'>
                        <div className='col-6' style={{ marginTop: 'auto' }}>
                            <p>Assignees</p>
                            <Select
                                mode="multiple"
                                size={size}
                                placeholder="Please select"
                                onChange={handleChange}
                                optionFilterProp="label"
                                style={{
                                    width: '100%',
                                }}
                                options={userOptions}
                            />
                            <div className='row mt-3'>
                                <div className='col-12'>
                                    <p>Original Estimate</p>
                                    <input type='number' className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <p>Time tracking</p>
                            <Slider
                                defaultValue={30}
                                max={Number(timeTracking.timeTrackingSpent) + Number(timeTracking.timeTrackingRemaining)}
                                value={timeTracking.timeTrackingSpent}
                            />
                            <div className='row'>
                                <div className='col-6 text-left font-weight-bold'>{timeTracking.timeTrackingSpent}h logged</div>
                                <div className='col-6 text-right font-weight-bold'>{timeTracking.timeTrackingRemaining}h remaining</div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <p>Time spent</p>
                                    <input
                                        min="0"
                                        defaultValue="0"
                                        onChange={(e) => {
                                            setTimeTracking({
                                                ...timeTracking,
                                                timeTrackingSpent: e.target.value
                                            })
                                        }} name='timeTrackingSpent' type='number' className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <p name='timeTrackingSpent' className='text-right'>Time remaining</p>
                                    <input
                                        min="0"
                                        onChange={(e) => {
                                            setTimeTracking({
                                                ...timeTracking,
                                                timeTrackingRemaining: e.target.value
                                            })
                                        }} name='timeTrackingRemaining' defaultValue="0" type='number' className='form-control' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <p>Description</p>
                    <Editor
                        name="description"
                        init={{
                            selector: 'textarea#myTextArea',
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
            </div>
        </div>
    )
}
