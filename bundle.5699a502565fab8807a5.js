webpackJsonp([1,2],{

/***/ 1137:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(76);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(61);

var _redux = __webpack_require__(37);

var _app = __webpack_require__(431);

var _app2 = _interopRequireDefault(_app);

var _reducers = __webpack_require__(432);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: createStoreWithMiddleware(_reducers2.default) },
  _react2.default.createElement(_app2.default, null)
), document.querySelector('.container'));

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectDestination = selectDestination;
exports.selectDriver = selectDriver;
exports.setMyLocation = setMyLocation;

var _sample_drivers_destination = __webpack_require__(448);

function selectDestination(id) {
  return {
    type: 'DESTINATION_SELECTED',
    payload: _sample_drivers_destination.destination[id]
  };
}

function selectDriver(driver) {
  console.log(driver);
  return {
    type: 'DRIVER_SELECTED',
    payload: driver
  };
}

function setMyLocation(latitude, longitude) {
  return {
    type: 'SET_MY_LOCATION',
    payload: { latitude: latitude, longitude: longitude }
  };
}

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search_bar = __webpack_require__(447);

var _search_bar2 = _interopRequireDefault(_search_bar);

var _drivers_info = __webpack_require__(445);

var _drivers_info2 = _interopRequireDefault(_drivers_info);

var _drivers_map = __webpack_require__(446);

var _drivers_map2 = _interopRequireDefault(_drivers_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_search_bar2.default, null),
        _react2.default.createElement(_drivers_map2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(37);

var _sample_drivers_destination = __webpack_require__(451);

var _sample_drivers_destination2 = _interopRequireDefault(_sample_drivers_destination);

var _sample_drivers_location = __webpack_require__(452);

var _sample_drivers_location2 = _interopRequireDefault(_sample_drivers_location);

var _reducer_active_driver = __webpack_require__(450);

var _reducer_active_driver2 = _interopRequireDefault(_reducer_active_driver);

var _reducer_active_destination = __webpack_require__(449);

var _reducer_active_destination2 = _interopRequireDefault(_reducer_active_destination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  destination: _sample_drivers_destination2.default,
  info: _sample_drivers_location2.default,
  activeDriver: _reducer_active_driver2.default,
  activeDestination: _reducer_active_destination2.default
});

exports.default = rootReducer;

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(61);

var _redux = __webpack_require__(37);

var _index = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DriverInfo = function (_Component) {
	_inherits(DriverInfo, _Component);

	function DriverInfo() {
		_classCallCheck(this, DriverInfo);

		return _possibleConstructorReturn(this, (DriverInfo.__proto__ || Object.getPrototypeOf(DriverInfo)).apply(this, arguments));
	}

	_createClass(DriverInfo, [{
		key: 'renderList',
		value: function renderList() {
			var _this2 = this;

			return this.props.info.map(function (info) {
				return _react2.default.createElement(
					'li',
					{
						key: info.id,
						onClick: function onClick() {
							return _this2.props.selectDriver(info);
						},
						className: 'list-group-item'
					},
					info.DriverName,
					info.License
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ className: 'list-group col-sm-4' },
				this.renderList()
			);
		}
	}]);

	return DriverInfo;
}(_react.Component);

function mapStateToProps(state) {
	console.log(state);
	return {
		info: state.info
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ selectDriver: _index.selectDriver }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DriverInfo);

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(243);

var _reactRedux = __webpack_require__(61);

var _redux = __webpack_require__(37);

var _index = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global google */

var taxi = '../../image/taxi.png';
var mylocation = '../../image/mylocation.png';

var geolocation = navigator.geolocation || {
  getCurrentPosition: function getCurrentPosition(success, failure) {
    failure('Your browser doesn\'t support geolocation.');
  }
};

var DirectionsExampleGoogleMap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 7,
      defaultCenter: props.center
    },
    props.marker,
    props.directions && _react2.default.createElement(_reactGoogleMaps.DirectionsRenderer, { directions: props.directions }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactGoogleMaps.Marker, {
        position: props.center,
        icon: mylocation
      })
    )
  );
});

var DriversMap = function (_Component) {
  _inherits(DriversMap, _Component);

  function DriversMap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DriversMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DriversMap.__proto__ || Object.getPrototypeOf(DriversMap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      taxiID: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DriversMap, [{
    key: 'componentDidMount',


    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     taxiID: null,
    //     showInfo: false
    //   };
    // }

    // markerLocation = this.markerLocation.bind(this);
    // onMarkerClick = this.onMarkerClick.bind(this);

    value: function componentDidMount() {
      var _this2 = this;

      geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        _this2.setState({
          latitude: lat,
          longitude: lng
        });
        _this2.props.setMyLocation(lat, lng);
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this3 = this;

      if (!this.props.activeDriver || !this.props.destination) {
        return {};
      }

      var DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: { lat: this.props.activeDriver.latitude, lng: this.props.activeDriver.longitude },
        destination: { lat: this.props.destination.latitude, lng: this.props.destination.longitude },
        travelMode: google.maps.TravelMode.DRIVING
      }, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          _this3.setState({
            directions: result
          });
        } else {
          console.error('error fetching directions ' + result);
        }
      });
    }
  }, {
    key: 'onMarkerClick',
    value: function onMarkerClick(targetMarker) {
      this.setState({
        taxiID: targetMarker,
        showInfo: false
      });
    }
  }, {
    key: 'markerLocation',
    value: function markerLocation() {
      var _this4 = this;

      return this.props.DriverInfo.map(function (info) {
        return _react2.default.createElement(
          _reactGoogleMaps.Marker,
          {
            key: info.id,
            icon: taxi,
            position: { lat: info.latitude, lng: info.longitude },
            onClick: function onClick() {
              return _this4.onMarkerClick(info.id);
            }
          },
          info.id === _this4.state.taxiID && _react2.default.createElement(
            _reactGoogleMaps.InfoWindow,
            null,
            _react2.default.createElement(
              'div',
              null,
              info.DriverName,
              info.License
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.activeDriver || !this.props.destination) {
        return _react2.default.createElement(
          'div',
          null,
          '\u8ACB\u9078\u64C7\u53F8\u6A5F\u76EE\u7684\u5730'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          '\u51FA\u767C\u9EDE:( ',
          this.props.activeDriver.latitude,
          ', ',
          this.props.activeDriver.longitude,
          ' )'
        ),
        _react2.default.createElement(
          'div',
          null,
          '\u76EE\u7684\u5730: ',
          this.props.destination.name,
          '( ',
          this.props.destination.latitude,
          ', ',
          this.props.destination.longitude,
          ' )'
        ),
        _react2.default.createElement(DirectionsExampleGoogleMap, {
          containerElement: _react2.default.createElement('div', { style: { width: 900, height: 400 } }),
          mapElement: _react2.default.createElement('div', { style: { height: '100%' } }),
          center: { lat: this.state.latitude, lng: this.state.longitude },
          directions: this.state.directions,
          marker: this.markerLocation()
        })
      );
    }
  }]);

  return DriversMap;
}(_react.Component);

function mapStateToProps(state) {
  return {
    activeDriver: state.activeDriver,
    destination: state.activeDestination,
    DriverInfo: state.info
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ selectDriver: _index.selectDriver, setMyLocation: _index.setMyLocation }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DriversMap);

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(61);

var _redux = __webpack_require__(37);

var _index = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
  }

  _createClass(SearchBar, [{
    key: 'onSelectChange',
    value: function onSelectChange(event) {
      var destination = event.target.value;
      this.props.selectDestination(destination);
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this2 = this;

      return Object.keys(this.props.destination).map(function (key) {
        var destination = _this2.props.destination[key];
        return _react2.default.createElement(
          'option',
          {
            key: key,
            value: key,
            className: 'list-group-item'
          },
          destination.title
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { width: 600, height: 100 } },
          _react2.default.createElement(
            'label',
            { htmlFor: 'select' },
            '\u8ACB\u9078\u64C7\u5230\u9054\u5730\u9EDE:'
          ),
          _react2.default.createElement(
            'select',
            { onChange: this.onSelectChange.bind(this), className: 'form-control' },
            this.renderList()
          )
        )
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

function mapStateToProps(state) {
  return {
    destination: state.destination
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ selectDestination: _index.selectDestination }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchBar);

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var destination = exports.destination = {
   'Get Start': {
      null: null
   },
   "1": {
      "name": '台北101 Taipei 101',
      "latitude": 25.033964,
      "longitude": 121.564472
   },
   '2': {
      "name": '台北科技大學 NTUT',
      "latitude": 25.042233,
      "longitude": 121.535497

   },
   '3': {
      "name": '台北火車站 Taipei Main Station',
      "latitude": 25.047739,
      "longitude": 121.517040
   }
};

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case 'DESTINATION_SELECTED':
			return action.payload;
	}
	return state;
};

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case 'DRIVER_SELECTED':
			return action.payload;

		case 'SET_MY_LOCATION':
			return action.payload;
	}
	return state;
};

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {
   return [{ title: '' }, { title: 'Taipei 101', latitude: 25.033964, longitude: 121.564472 }, { title: 'NTUT', latitude: 25.042233, longitude: 121.535497 }, { title: 'Taipei Main Station', latitude: 25.047739, longitude: 121.517040 }];
};

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = driversLocation;
function driversLocation() {
  return [{ "id": "1472624542-98-25.0612060437064-121.536598889408", "latitude": 25.0612060437064, "longitude": 121.536598889408, "DriverId": 879595, "DriverName": "張偉誠", "License": "GX-106" }, { "id": "1472624726-19-25.0593013639487-121.548908579886", "latitude": 25.0503013639487, "longitude": 121.542308579886, "DriverId": 551404, "DriverName": "王彥帆", "License": "FF-203" }, { "id": "1472624635-98-25.0591834864715-121.546946254225", "latitude": 25.0581834864715, "longitude": 121.542946254225, "DriverId": 161411, "DriverName": "蔡幼志", "License": "QU-797" }, { "id": "1472624959-7-25.0595791928171-121.546321870815", "latitude": 25.02791928171, "longitude": 121.546321870815, "DriverId": 506970, "DriverName": "黃坤琦", "License": "EB-072" }, { "id": "1472624635-98-25.059183-121.546946", "latitude": 25.057183, "longitude": 121.516946, "DriverId": 504289, "DriverName": "羅珈禮", "License": "UI-144" }, { "id": "1472624422-13-25.060041-121.538026", "latitude": 25.060041, "longitude": 121.538026, "DriverId": 471384, "DriverName": "陳淑奇", "License": "SM-552" }];
}

/***/ }

},[1137]);