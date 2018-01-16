module.exports = {
    path: 'course/:courseId',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Course'))
        })
    }
};
