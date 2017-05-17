import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OverlayView } from 'react-google-maps';

class DriversMarker extends Component {
    
    // renderList() {
    //     return this.props.info.map((info) => {
    //         return (
    //             <li
    //                 key={info.id}
    //                 className="list-group-item"
    //             >
    //                 {info.latitude}
    //                 {info.longitude}
    //             </li>
    //         );
    //     });
    // }
    
    render() {
        const { latitude, longitude } = this.props.info;

        return (
            <OverlayView
                position={{ lat: latitude, lng: longitude }}
            >
            <li>
                {this.props.info.latitude}
                {this.props.info.longitude}
            </li>

            </OverlayView>
         );
    }
}

function mapStateToProps(state) {
    return { info: state.info };
}

export default connect(mapStateToProps)(DriversMarker);
