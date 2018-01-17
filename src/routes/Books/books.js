module.exports = {
    path: 'books',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Books'))
        })
    }
};