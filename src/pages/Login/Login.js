import { Button, Input } from 'antd'
import React from 'react'
import { UserOutlined, LockOutlined, TwitterOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/LoginActions';
import { USER_SIGNIN_API } from '../../redux/constants/LoginConstants';

export default function Login(props) {

    const dispatch = useDispatch();

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
            console.log(errors.email);
        } else if (!/^[A-Z._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
            console.log(errors.email);

        }

        if (!values.password) {
            errors.password = 'Required';
            console.log(errors.password);
        }

        return errors;
    };


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: (values) => {
            // console.log('values', values);
            dispatch(loginAction(values.email, values.password));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className='container' style={{ height: window.innerHeight }}>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: window.innerHeight }}>
                <h3 className='text-center' style={{ fontWeight: 300, fontSize: 35 }}>Login Jira</h3>

                <div className='d-flex mt-3'>
                    <Input name='email' type='email' onChange={formik.handleChange} placeholder='email' prefix={<svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>}
                        value={formik.values.email}
                    />
                </div>
                <div className='d-flex mt-3'>
                    <Input name='password' type='password' onChange={formik.handleChange} placeholder='password' prefix={<LockOutlined />}
                        value={formik.values.password}
                    />
                </div>
                <Button
                    
                    htmlType='submit' size='large' style={{ minWidth: 220, backgroundColor: 'rgb(102,117,223)', color: 'white' }} className='mt-3'>Login</Button>

                <div className='d-flex mt-3'>
                    <Button type='primary' icon={<i className="fab fa-facebook-f"></i>}>
                    </Button>
                    <Button type='primary' className='ml-3' icon={<TwitterOutlined />}>
                    </Button>
                </div>
                {/* {formik.errors.email ? <div> {formik.errors.password} </div> : null} */}

            </div>

        </form>
    )
}
