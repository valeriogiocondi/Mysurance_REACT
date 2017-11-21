import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import allReducers from '../reducers'

import Header from './Header'
import Home from './Home'
import RemovePopup from './RemovePopup'
import AddInsurance from './AddInsurance'
import { hidePopup, handleListenerPopup} from '../library'
import { loadState, saveState } from '../localStorage'

let store = createStore(allReducers, JSON.parse(loadState()))

store.subscribe(() => {

  saveState(store.getState());
});


render(
  <Provider store={store}>
    <Router>
      <Switch>
        <div>
          <div id="background-popup" className="fade-out"></div>
          <Header />
          <RemovePopup />
          <Route exact path="/" component={Home}/>
          <Route path="/add-insurance" component={AddInsurance}/>
        </div>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'))
