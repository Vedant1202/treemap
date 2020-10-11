import React from 'react';

import { Input, Tooltip } from 'antd';
import { Button, Space } from 'antd';
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import reqwest from 'reqwest';

import './login-form.styles.scss';
import config from '../../config/config';
import { Anchor } from 'antd';
import { withRouter } from 'react-router-dom';

const { Link } = Anchor;

class LoginFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleSubmit = () => {
        reqwest({
            url: config.apiUrl + 'auth/login',
            type: 'json',
            method: 'post',
            data: this.state,
            error: (err) => {
                alert(err.message);
            },
            success: (resp) => {
                this.props.setCurrentUser(resp);
                this.props.history.push('/homepage');
                window.location.assign('/');
            },
        });
    };

    render() {
        return (
            <div className="login-form">
                <Space direction="vertical" className="login-form-space">
                    <Input
                        className="login-input"
                        placeholder="Enter your email"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Email">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                        onChange={(event) => {
                            this.handleEmailChange(event);
                        }}
                        bordered={false}
                    />
                    <Input.Password
                        className="login-input"
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        onChange={(event) => {
                            this.handlePasswordChange(event);
                        }}
                    />
                    <Button
                        type="primary"
                        block
                        onClick={() => {
                            this.handleSubmit();
                        }}
                    >
                        Login
                    </Button>
                    <Anchor>
                        <Link href="/register" title="New User? Register here" />
                    </Anchor>
                </Space>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user));
        },
    };
};

export default withRouter(connect(null, mapDispatchToProps)(LoginFormComponent));
