import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDriver } from '../actions/index';


class DriverInfo extends Component {

	renderList() {
		return this.props.info.map((info) => {
			return (
				<li
					key={info.id}
					onClick={() => this.props.selectDriver(info)}
					className="list-group-item"
				>
					{info.DriverName}
					{info.License}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4" >
				{this.renderList()}
			</ul>
		);
	}
}

	function mapStateToProps(state) {
		console.log(state);
		return {
			info: state.info
		};
	}

	function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectDriver: selectDriver }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverInfo);
