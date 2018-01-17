import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavBar, Card, Flex, Icon } from 'antd-mobile';

const styles = {
    wrapper: {
        width: '100%',
        height: '100%'
    },
    header: {
        width: '100%',
        height: '45px',
    },
    content: {
        width: '100%',
        flex: 1,
        overflow: 'auto'
    }
};

class Book extends Component {

    onBack() {
        this.props.router.goBack();
    }

    render() {
        const { title, description, price } = this.props.location.query;

        return (
            <Flex direction="column" style={ styles.wrapper }>
                <div style={ styles.header }>
                    <NavBar 
                        mode="dark"
                        leftContent="返回"
                        icon={<Icon type="left" />}
                        onLeftClick={ this.onBack.bind(this) }>
                        图书详情
                    </NavBar>
                </div>
                <div style={ styles.content }>
                    <Card>
                        <Card.Header
                            title="标题"
                            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                            extra={ <span>{ title }</span> }/>
                        <Card.Body>
                            <div>{ description }</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>{ price }</div>} />
                    </Card>
                </div>
            </Flex>
        )
    }
}

module.exports = withRouter(Book);
