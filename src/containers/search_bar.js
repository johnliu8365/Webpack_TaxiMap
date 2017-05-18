import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDestination } from '../actions/index';

class SearchBar extends Component {

  onSelectChange(event) {
    const destination = event.target.value;
    this.props.selectDestination(destination);
  }



        //   var pokemonId = event.target.value;
        // const { latitude, longitude, level } = this.props.filter;

        // //console.log(pokemonId);
        // this.setState({ id: pokemonId });

        // this.props.fetchPokemonsLocation(latitude, longitude, level, pokemonId);
        // this.props.fetchPokemonInfo(pokemonId);
        // this.props.setSelectId(pokemonId);


  renderList() {
      return Object.keys(this.props.destination).map((key) => {
                  const destination = this.props.destination[key];

      return (
        <option
          key={key}
          value={key}
          className="list-group-item"
        >
          {destination.title}
        </option>
      );
    });
  }

  render() {
    return (
      <div> 
          <div style={{ width: 600, height: 100 }} > 
            <label htmlFor="select" >請選擇到達地點:</label> 
            <select onChange={this.onSelectChange.bind(this)} className="form-control"> 
              {this.renderList()} 
            </select> 
          </div> 

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    destination: state.destination,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDestination: selectDestination }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
