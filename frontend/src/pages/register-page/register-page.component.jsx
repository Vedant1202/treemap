import React from 'react';

import './register-page.styles.scss';

import { Typography } from 'antd';
import RegisterFormComponent from '../../components/register-form/register-form.component';

const { Title } = Typography;

const RegisterPage = () => (
    <div classname="register-page-div" style={{ padding: '10vh' }}>
        <Title className="register-page-title">Tree Map</Title>
        <RegisterFormComponent />
    </div>
);

export default RegisterPage;
