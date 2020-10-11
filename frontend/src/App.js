import React from 'react';
import './App.css';
// import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import HomePage from './pages/home-page/home-page.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { connect } from 'react-redux';
import RegisterPage from './pages/register-page/register-page.component';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        this.setState({
            // eslint-disable-next-line
            user: this.props.user,
        });
    }

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>
                        this.state.user ? <Redirect to="/homepage"></Redirect> : <Redirect to="/login"></Redirect>
                    }
                ></Route>
                <Route
                    exact
                    path="/homepage"
                    render={() => (this.state.user ? <HomePage /> : <Redirect to="/login"></Redirect>)}
                ></Route>
                <Route
                    exact
                    path="/login"
                    render={() => (this.state.user ? <Redirect to="/"></Redirect> : <LoginPage />)}
                ></Route>
                <Route
                    exact
                    path="/register"
                    render={() => (this.state.user ? <Redirect to="/"></Redirect> : <RegisterPage />)}
                ></Route>
                <Route path="*" component={ErrorPage}></Route>
            </Switch>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
