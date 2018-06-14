import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Calculator from '../calculator/calculator'

export default props => (
    <Router history={hashHistory}>
        <Route path='/calculator' component={Calculator} />
        <Redirect from='*' to='/calculator' />
    </Router>
)