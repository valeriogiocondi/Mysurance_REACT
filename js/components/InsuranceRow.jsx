import React from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import allReducers from '../reducers'
import { saveInsuranceToRemove } from '../actions'


class InsuranceRow extends React.Component {
  
  showRemovePopup(obj) {

    this.props.saveInsuranceToRemove(obj)

    document.getElementById("background-popup").classList.add("fade-in");
    document.getElementById("remove-popup").classList.add("fade-in");
  }
  render() {
    return (
      <tr className={this.props.item.id}>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.yearlyPremium}</td>
        <td>{this.props.item.category}</td>
        <td>
          <button onClick={() => this.showRemovePopup({id: this.props.item.id, yearlyPremium: this.props.item.yearlyPremium})}>
            <i className="fa fa-remove"></i>
          </button>
        </td>
      </tr>
    );
  }
}


function mapStateToProps(state) {

  return {}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

    saveInsuranceToRemove: saveInsuranceToRemove
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceRow);