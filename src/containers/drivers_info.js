import React, { Component } from 'react';
import { connect } from 'react-redux';

class DriverInfo extends Component {

	renderList() {
		return this.props.info.map((info) => {
			return (
				<li
					key={info.id}
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
		return {
			info: state.info
		};
	}

export default connect(mapStateToProps)(DriverInfo);
