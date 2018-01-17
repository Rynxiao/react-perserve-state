import {
    GET_BOOKS,
    UPDATE_BOOKS
} from '../const';

const createAction = (type) => {
    return (payload) => {
        return { type, payload };
    };
};

const getBooks = createAction(GET_BOOKS);
const updateBooks = createAction(UPDATE_BOOKS);

module.exports = {
    getBooks,
    updateBooks
};