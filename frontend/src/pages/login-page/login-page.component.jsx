import React from 'react';

import LoginFormComponent from '../../components/login-form/login-form.component';

import './login-page.styles.scss';

import { Typography } from 'antd';

const { Title } = Typography;

const LoginPage = () => (
    <div classname="login-page-div" style={{ padding: '10vh' }}>
        <Title className="login-page-title">Tree Map</Title>
        <LoginFormComponent />
    </div>
);

export default LoginPage;
