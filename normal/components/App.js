import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Dashboard from './Dashboard';

const styles = {
    app: {
        width: '100%',
        height: '100%'
    }
};

class App extends Component {
    render() {
        return (
            <div style={ styles.app }>
              { this.props.children || <Dashboard /> }
            </div>
        )
    }
}

module.exports = withRouter(App);
