import React from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import allReducers from '../reducers'
import { decrementCounter, removeInsurance } from '../actions'
import { hidePopup } from '../library'


class RemovePopup extends React.Component {

  removeRow() {

    var obj = this.props.storeReducer;

    this.props.removeInsurance({id: obj.id})
    this.props.decrementCounter({yearlyPremium: obj.yearlyPremium})
    hidePopup();
  }
  render() {
    return (
      <div>
        <div id="remove-popup" className="popup fade-out">
          <button className="button close-popup" onClick={() => hidePopup()}>
            <i className="fa fa-remove"></i>
          </button>
          <p>
            This insurance will be removed
            <div className="insurance-name"></div>
          </p>
          <button className="button inverse remove-insurance" onClick={() => this.removeRow()}>
          REMOVE
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return { 
    storeReducer: state.storeReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

    decrementCounter: decrementCounter,
    removeInsurance: removeInsurance

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RemovePopup);