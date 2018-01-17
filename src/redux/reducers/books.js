import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { GET_BOOKS, UPDATE_BOOKS } from '../const';

const initialState = {
    books: [],
    activeIndex: -1
};

const booksReducers = handleActions({
    /**
     * 获取Books
     * @param state
     * @returns {*}
     */
    [GET_BOOKS](state) {
        const books = [];
        for (let i = 0; i < 50; i++) {
            books.push({
                id: i + 1,
                title: `图书${i + 1}`,
                description: `描述${i + 1}`,
                price: `￥${i + 1}.00`
            });
        }
        return Object.assign({}, state, { books });
    },

    [UPDATE_BOOKS](state, action) {
        return Object.assign({}, state, action.payload);
    }
}, initialState);

module.exports = booksReducers;