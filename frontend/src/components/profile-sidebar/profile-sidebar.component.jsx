import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import './profile-sidebar.styles.scss';

import { Collapse, Button } from 'antd';
import { Input } from 'antd';
import { List, message, Spin } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';

import reqwest from 'reqwest';
import config from '../../config/config';
import { withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

const { Search } = Input;
const { Panel } = Collapse;

class ProfileSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            trees: [],
            loading: false,
            hasMore: true,
        };
    }

    handleChange = (e) => {
        this.setState({
            searchKey: e.target.value,
        });
    };

    handleSearch = (query) => {
        this.fetchData((res) => {
            this.setState({
                trees: res.data,
            });
        });
    };

    handleLogout = () => {
        this.props.setCurrentUser(null);
        setTimeout(() => {
            this.props.history.push('/login');
            window.location.assign('/');
        }, 1000);
        alert('Logout successful!');
    };

    fetchData = (callback) => {
        const { user } = this.props;
        reqwest({
            url: config.apiUrl + 'trees/search/' + this.state.searchKey,
            type: 'json',
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${user.tokens.access.token}`,
            },
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    };

    handleInfiniteOnLoad = () => {
        let { trees } = this.state;
        this.setState({
            loading: true,
        });
        if (trees.length > 8) {
            message.warning("That's all we could gather :/");
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.setState({
            loading: false,
        });
    };

    handleAddTree = (tree) => {
        const { common_name, scientific_name, image_url } = tree;
        const { latitude, longitude, user } = this.props;

        const data = {
            common_name,
            scientific_name,
            image_url,
            user_by: user.user,
            latitude,
            longitude,
        };

        reqwest({
            url: config.apiUrl + 'trees',
            type: 'json',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${user.tokens.access.token}`,
            },
            data,
            error: function (err) {
                console.log(err);
            },
            success: function (resp) {
                alert('Tree added!');
                window.location.reload();
            },
        });
    };

    render() {
        const { trees } = this.state;
        const { user } = this.props;

        return (
            <div className="profile-sidebar-div">
                <div className="profile-section">
                    <Avatar className="profile-avatar" icon={<UserOutlined />} size={100}></Avatar>
                    <div className="profile-username">
                        {user.user.name} <br />
                    </div>
                    <div className="add-new-tree-form">
                        <Collapse defaultActiveKey={['1']} ghost>
                            <Panel header="Add new tree?" key="1">
                                <Search
                                    placeholder="Search plants to add"
                                    enterButton="Search"
                                    size="large"
                                    width="15vw"
                                    value={this.state.searchKey}
                                    onChange={(event) => this.handleChange(event)}
                                    onSearch={(value) => this.handleSearch(value)}
                                />
                                <div className="search-results">
                                    <div className="demo-infinite-container">
                                        <InfiniteScroll
                                            initialLoad={false}
                                            pageStart={0}
                                            loadMore={this.handleInfiniteOnLoad}
                                            hasMore={!this.state.loading && this.state.hasMore}
                                            useWindow={false}
                                        >
                                            <List
                                                dataSource={trees}
                                                renderItem={(item) => (
                                                    <List.Item key={item.id}>
                                                        <List.Item.Meta
                                                            avatar={<Avatar src={item.image_url} />}
                                                            title={item.common_name}
                                                            description={
                                                                <span>Scientific Name: {item.scientific_name}</span>
                                                            }
                                                        />
                                                        <div>
                                                            <Button
                                                                type="primary"
                                                                block
                                                                onClick={() => {
                                                                    this.handleAddTree(item);
                                                                }}
                                                            >
                                                                Add
                                                            </Button>
                                                        </div>
                                                    </List.Item>
                                                )}
                                            >
                                                {this.state.loading && this.state.hasMore && (
                                                    <div className="demo-loading-container">
                                                        <Spin />
                                                    </div>
                                                )}
                                            </List>
                                        </InfiniteScroll>
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="logout-section">
                        <Button
                            block
                            onClick={() => {
                                this.handleLogout();
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
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

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar));
