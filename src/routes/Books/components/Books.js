import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar, List, Flex, Toast, Icon } from 'antd-mobile';
import actions from '../../../redux/actions/';

const Item = List.Item;
const Brief = Item.Brief;

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

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        };
    }

    componentDidMount() {
        const { actions, books } = this.props;
        const content = this.refs.content;
        const scrollTop = books.scrollTop;
      
        if (scrollTop > 0) {
            content.scrollTo(0, scrollTop);
        }
        setTimeout(() => {
            actions.getBooks();
        }, 150);
    }

    componentWillUnmount() {
        const content = this.refs.content;
        const { actions } = this.props;
        actions.updateBooks({ scrollTop: content.scrollTop });
    }

    shouldComponentUpdate(nextProps, nextState) {

        return !is(fromJS(this.props.books), fromJS(nextProps.books))
            || !is(fromJS(this.state), fromJS(nextState));
    }

    onLookDetail(id, book, index) {
        const { actions } = this.props;
        actions.updateBooks({ activeIndex: index });
        this.props.router.push({ pathname: `book/${id}`, query: book });
    }

    onBack() {
        this.props.router.goBack();
    }

    render() {
        const { books } = this.props;
        const list = books.books;
        const activeIndex = books.activeIndex;

        return (
            <Flex direction="column" style={ styles.wrapper }>
                <div style={ styles.header }>
                    <NavBar 
                        mode="dark"
                        leftContent="返回"
                        icon={<Icon type="left" />}
                        onLeftClick={ this.onBack.bind(this) }>
                        图书列表
                    </NavBar>
                </div>
                <div style={ styles.content } ref="content">
                    {
                        list.map((book, index) => {
                            return (
                                <Item
                                    key={ `bookItem${index}` }
                                    style={ activeIndex === index ? { backgroundColor: 'red' } : {}}
                                    extra={ book.price }
                                    arrow="horizontal"
                                    align="middle"
                                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                                    multipleLine
                                    onClick={ this.onLookDetail.bind(this, book.id, book, index) }>
                                    { book.title }
                                    <Brief>{ book.description }</Brief>
                                </Item>
                            );
                        })
                    }
                </div>
            </Flex>
        )
    }
}

function mapStateToProps(state) {
    const { books } = state;
    return {
        books
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

module.exports = withRouter(connect(mapStateToProps, mapDispatchToProps)(Books));
