import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NotFound from '../components/NotFound';
import RoutersUnAuthen from './RoutersUnAuthen';
import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            routes: RoutersUnAuthen
        };
    }

    componentDidMount() {
        const { isLogin } = this.state;
        if (isLogin) {
            this.setState({
                routes: RoutersAuthen
            });
        }
    }

    render() {
        const { history } = this.props;
        const { routes } = this.state;
        return (
            <Router history={history}>
                <div className="main-container">
                    <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Default React.js Boilerplate">
                        <meta name="description" content="A React.js Boilerplate application" />
                    </Helmet>
                    {routes.length && (
                        <ul className="nav">
                            {routes.map((route, key) => (
                                <Route key={key} path={route.path} exact={route.exact}>
                                    {({ match }) => (
                                        <li className={match ? 'active' : null}>
                                            <Link to={route.path}>{route.title}</Link>
                                        </li>
                                    )}
                                </Route>
                            ))}
                        </ul>
                    )}
                    <Switch>
                        {routes.length && routes.map((route, key) => <Route key={key} {...route} />)}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

Routers.propTypes = {
    history: PropTypes.object.isRequired
};

export default Routers;
