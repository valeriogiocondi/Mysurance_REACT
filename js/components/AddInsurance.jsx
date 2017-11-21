import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import allReducers from '../reducers'
import {incrementCounter, addInsurance} from '../actions'
import { hidePopup, handleListenerPopup} from '../library'

var categorySelected = [];


class AddInsurance extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      insurancesListFromWikipedia: []
    }
  }
  getInsurancesList() {

    this.serverRequest = $.get("https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*", function(result) {

      this.setState({insurancesListFromWikipedia: result.query.categorymembers});
    }.bind(this));

  }
  getRandomId() {

    var date = new Date();
    return "insurance-"+date.getTime();
  } 
  insuranceChoosed() {

    var data = {
      "category": categorySelected.name, 
      "id": this.getRandomId(), 
      "name": document.getElementsByClassName("name")[0].value, 
      "yearlyPremium": document.getElementsByClassName("yearly-premium")[0].value
    };

    if (
      data.category &&
      data.id &&
      data.name.length > 0 &&
      data.yearlyPremium.length > 0 
    ) 
    {

      this.props.addInsurance(data);
      this.props.incrementCounter({yearlyPremium: data.yearlyPremium});

      window.history.back();

    } 
    else
      this.showAlertPopup();

  }
  showAlertPopup() {
    
    document.getElementById("background-popup").classList.add("fade-in");
    document.getElementById("alert").classList.add("fade-in");
  }
  checkIsNumber(e) {

    var charAllowed = [8, 9, 13, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

    if (!charAllowed.includes(e.which))
      e.preventDefault();
  }
  showUpCustomList() {

    document.getElementsByClassName("custom-list")[0].getElementsByTagName("ul")[0].classList.add("fade-in");
  } 
  hideUpCustomList() {

    setTimeout(function(){

      document.getElementsByClassName("custom-list")[0].getElementsByTagName("ul")[0].classList.remove("fade-in");

    }, 100);
  } 
  filterInsuranceList(arg) {

    var value = arg.target.value.toLowerCase();
    var customList = document.getElementsByClassName("custom-list")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");

    if (!document.getElementsByClassName("custom-list")[0].getElementsByTagName("ul")[0].classList.contains("fade-in"))
      this.showUpCustomList();

    for (var i=0, n=customList.length; i<n; i++) {

      if (customList[i].innerHTML.toLowerCase().includes(value))
        customList[i].style.display = "block";
      else
        customList[i].style.display = "none";
    }
  }
  componentDidMount() {

    this.getInsurancesList();
  }   
  render() {

    var insurancesSelect = [];
    if (this.state != null) {

      this.state.insurancesListFromWikipedia.map(function(item) {

        insurancesSelect.push(<InsuranceListItem item={item} />);
      });
    }
    return (
      <div id="add-insurance" className="main-section responsive">
        <div id="alert" className="popup fade-out">
          <button className="button close-popup" onClick={() => hidePopup()}>
            <i className="fa fa-remove"></i>
          </button>
          <p>Please, fill every field</p>
        </div>
        <header>
          <Link className="button go-back" to={"/"}>
            <i className="fa fa-caret-left"></i> BACK
          </Link>
          <h1>CUSTOMIZE YOUR INSURANCE</h1>
        </header>
        <section>
          <div className="input-text">
            <span>Title</span>
            <input className="name" type="text" placeholder="Enter Title" />
          </div>
          <div className="input-text">
            <span>Yearly Premium</span>
            <input className="yearly-premium" type="text" onKeyDown={(e) => this.checkIsNumber(e)} placeholder="Enter Amount (CHF)" />
          </div>
          <div className="input-text custom-list">
            <span>Category</span>
            <input className="category" type="text" onKeyUp={(e) => this.filterInsuranceList(e)} onClick={this.showUpCustomList} onFocus={this.showUpCustomList} onBlur={this.hideUpCustomList} placeholder="Choose Category" />
            <i className="fa fa-caret-down"></i>
            <ul className="fade-out">{insurancesSelect}</ul>
          </div>
          <button id="choose-insurance" className="button" onClick={(e) => this.insuranceChoosed(e)}>DONE</button>
        </section>
      </div>

    );
  }
}

class InsuranceListItem extends React.Component {
  
  itemSelected() {

    document.getElementsByClassName("category")[0].value = this.name;
    categorySelected = this;
  }
  render() {

    let boundItemSelected = this.itemSelected.bind({"id": this.props.item.pageid, "name": this.props.item.title.replace("Category:", "")});
    return (
      <li id={this.props.item.pageid} onClick={boundItemSelected}>{this.props.item.title.replace("Category:", "")}</li>
    );
  }
}

function mapStateToProps(state) {

  return {}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

      incrementCounter: incrementCounter,
      addInsurance: addInsurance

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInsurance);