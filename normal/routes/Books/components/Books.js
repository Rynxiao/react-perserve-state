import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavBar, List, Flex, Toast, Icon, Card } from 'antd-mobile';

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
    },
    modal: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 111,
        backgroundColor: '#fff'
    }
};

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1,
            books: [],
            modal: false
        };
    }

    componentDidMount() {
        const books = [];
        for (let i = 0; i < 50; i++) {
            books.push({
                id: i + 1,
                title: `图书${i + 1}`,
                description: `描述${i + 1}`,
                price: `￥${i + 1}.00`
            });
        }
        setTimeout(() => {
            this.setState({ books });
        }, 150);
    }

    onLookDetail(id, book, index) {
        this.setState({ activeIndex: index, modal: true });
        // this.props.router.push({ pathname: `books/book/${id}`, query: book });
    }

    onBack() {
        this.props.router.goBack();
    }

    onDetailBack() {
        this.setState({ modal: false });
    }

    render() {
        // const { children } = this.props;
        const { books, activeIndex, modal } = this.state;
        const book = books[activeIndex];

        // if (children) {
        //     return children;
        // }

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
                <div style={ styles.content }>
                    {
                        books.map((book, index) => {
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

                {
                    modal && (
                        <div style={ styles.modal }>
                            <Flex direction="column" style={ styles.wrapper }>
                                <div style={ styles.header }>
                                    <NavBar 
                                        mode="dark"
                                        leftContent="返回"
                                        icon={<Icon type="left" />}
                                        onLeftClick={ this.onDetailBack.bind(this) }>
                                        图书详情
                                    </NavBar>
                                </div>
                                <div style={ styles.content }>
                                    <Card>
                                        <Card.Header
                                            title="标题"
                                            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                                            extra={ <span>{ book.title }</span> }/>
                                        <Card.Body>
                                            <div>{ book.description }</div>
                                        </Card.Body>
                                        <Card.Footer content="footer content" extra={<div>{ book.price }</div>} />
                                    </Card>
                                </div>
                            </Flex>
                        </div>
                    )
                }
                
            </Flex>
        )
    }
}

module.exports = withRouter(Books);
