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

var _superagent = require('superagent');

var superagent = _interopRequireWildcard(_superagent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\story.js?entry';

var ObjectId = require('mongodb').ObjectId;
// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.
//add superagent route which receives id and then fetches that according to mongdb

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	(0, _createClass3.default)(_class, null, [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
				var req = _ref.req,
				    query = _ref.query;

				var db, id, story, _ref3, _story;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!req) {
									_context.next = 9;
									break;
								}

								db = req.db;
								id = query.id;
								_context.next = 5;
								return db.collection('posts').find({ "_id": ObjectId(id) }).toArray();

							case 5:
								story = _context.sent;
								return _context.abrupt('return', { story: story });

							case 9:
								_context.next = 11;
								return superagent.post('http://localhost:3000/api/story', query.id).then(function (res) {
									console.log("this is the body", res.body);
									return res.body;
								});

							case 11:
								_ref3 = _context.sent;
								_story = _ref3.story;
								return _context.abrupt('return', { story: _story });

							case 14:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
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
			var story = this.props.story;
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, 'This is the story'), story && _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, story.title), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, story.story)));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;