module.exports = {
    path: 'book/:id',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Book'))
        })
    }
};