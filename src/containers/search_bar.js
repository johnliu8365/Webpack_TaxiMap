import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

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
        <select className="list-group col-sm-4">
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

export default connect(mapStateToProps)(SearchBar);
