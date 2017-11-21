import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import allReducers from '../reducers'
import InsuranceRow from './InsuranceRow'


class Home extends React.Component {
  
  render() {

    if (this.props.insurancesList.length > 0) {

      var insurancesTableRow = [];
      this.props.insurancesList.map(function(item) {

        insurancesTableRow.push(<InsuranceRow item={item} />);
      });

      return (
        <div id="home" className="main-section responsive">
          <div className="total-yearly-premium">
            YEARLY PREMIUM: <span>{this.props.counterReducer} CHF</span>
          </div>
          <Link className="button add-insurance-button" to={"add-insurance"}>
            <i className="fa fa-plus"></i> ADD INSURANCE
          </Link>
          <table className="user-insurances-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>YEARLY PREMIUM</th>
                <th>CATEGORY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {insurancesTableRow}
            </tbody>
          </table>
        </div>
      );

    } else {

      return (
        <div id="home" className="main-section responsive">
          <h1 className="choose-your-insurance">HELLO! CHOOSE YOUR INSURANCE</h1>
          <Link className="button add-insurance-button big" to={"add-insurance"}>
            <i className="fa fa-plus"></i> ADD INSURANCE
          </Link>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {

  return { 
    counterReducer: state.counterReducer,
    insurancesList: state.insuranceReducer
  }
}

export default connect(mapStateToProps)(Home);