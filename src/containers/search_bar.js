import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectDestination } from '../actions/index';

class SearchBar extends Component {

  onSelectChange(event) {
    const destination = event.target.value;
    this.props.selectDestination(destination);
  }

  renderList() {
    return this.props.destination.map((destination) => {
      return (
        <option
          key={destination.title}
          className="list-group-item"
        >
          {destination.title}
        </option>
      );
    });
  }

  render() {
    return (
      <ul>
        <h3> Destination </h3>
        <select
        onChange={this.onSelectChange.bind(this)}
        className="list-group col-sm-4"
        >
          {this.renderList()}
        </select>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    destination: state.destination
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDestination: selectDestination }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
