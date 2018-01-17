import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavBar, List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Dashboard extends Component {

    onRedirect(page) {
        this.props.router.push(page);
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">首页</NavBar>
                <List className="my-list">
                    <Item arrow="horizontal" onClick={ this.onRedirect.bind(this, 'books') }>图书列表</Item>
                    <Item arrow="horizontal" onClick={() => {}}>课程列表</Item>
                    <Item arrow="horizontal" onClick={() => {}}>我的日历</Item>
                    <Item arrow="horizontal" onClick={() => {}}>我的积分</Item>
                </List>
            </div>
        )
    }
}

export default withRouter(Dashboard);
