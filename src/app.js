import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import withExampleBasename from './withExampleBasename'
import './stubs/COURSES'

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades')
    ]
  } ]
}

render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('container'))
