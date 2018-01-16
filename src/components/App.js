import React, { Component } from 'react';
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
                <div>
                    { this.props.children || <Dashboard /> }
                </div>
            </div>
        )
    }
}

module.exports = App;
