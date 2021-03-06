import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../../../../custom-fields/InputField';

import './FormLogin.scss';

const listFields = [
    {
        name: 'email',
        component: InputField,
        type: 'text',
        label: 'Email',
        placeholder: 'Email'
    },
    {
        name: 'password',
        component: InputField,
        type: 'password',
        label: 'Password',
        placeholder: 'Your Password'
    }
];

function FormLogin(props) {
    const { onSubmit, initValues, isAddMode } = props;
    const initialValues = {
        email: '',
        password: ''
    };
    const userLoginSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email buộc nhập!'),
        password: Yup.string()
            .required('Mật khẩu buộc nhập!')
    });

    function handleOnSubmit(values, actions) {
        onSubmit(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userLoginSchema}
            onSubmit={handleOnSubmit}
        >
            {(formikProps) => {
                const { isSubmitting } = formikProps;
                return (
                    <Form className="form-input">
                        {listFields && listFields.map((item) => (
                            <FastField
                                name={item.name}
                                component={item.component}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                            />
                        ))}
                        <div className="form-input__box-input">
                            <button type="submit" className="form-input__login">
                                Xác nhận &ensp;
                                {isSubmitting && <Spinner size="sm" color="white" />}
                            </button>
                            <NavLink
                                to="/register"
                                className="form-input__login"
                            >
                                Đăng ký
                            </NavLink>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

FormLogin.propTypes = {

};

export default FormLogin;
