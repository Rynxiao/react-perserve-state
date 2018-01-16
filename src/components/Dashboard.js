import React, { Component } from 'react';
import { NavBar, List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar mode="dark">图书列表</NavBar>
                <List className="my-list">
                    <Item
                        extra="10:30"
                        arrow="horizontal"
                        align="middle"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}>
                        Title
                        <Brief>subtitle</Brief>
                    </Item>
                    <Item
                        extra="10:30"
                        arrow="horizontal"
                        align="top"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}>
                        Title
                        <Brief>subtitle</Brief>
                    </Item>
                    <Item
                        extra="10:30"
                        arrow="horizontal"
                        align="top"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}>
                        Title
                        <Brief>subtitle</Brief>
                    </Item>
                    <Item
                        extra="10:30"
                        arrow="horizontal"
                        align="top"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}>
                        Title
                        <Brief>subtitle</Brief>
                    </Item>
                </List>
            </div>
        )
    }
}

export default Dashboard
