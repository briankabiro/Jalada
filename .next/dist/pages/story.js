'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	(0, _createClass3.default)(_class, null, [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
				var req = _ref2.req,
				    id = _ref2.query.id;

				var db, _story, _ref3, story;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!req) {
									_context.next = 7;
									break;
								}

								db = req.db;
								_context.next = 4;
								return db.collection('posts').find({ "_id": id }).toArray();

							case 4:
								_story = _context.sent;

								console.log(_story);
								return _context.abrupt('return', _story);

							case 7:
								_context.next = 9;
								return superagent.get('http://localhost:3000/api').then(function (res) {
									return res.body;
								});

							case 9:
								_ref3 = _context.sent;
								story = _ref3.story;
								return _context.abrupt('return', { list: list });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			var req = this.props.req;
			return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Hey'), _react2.default.createElement('p', null, 'These are the props', _react2.default.createElement('i', null, req)));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;