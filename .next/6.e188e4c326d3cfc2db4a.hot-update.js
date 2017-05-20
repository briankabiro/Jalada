webpackHotUpdate(6,{

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _superagent = __webpack_require__(565);

var superagent = _interopRequireWildcard(_superagent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.
//add superagent route which receives id and then fetches that according to mongdb

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
									_context.next = 8;
									break;
								}

								db = req.db;
								_context.next = 4;
								return db.collection('posts').find({ "ObjectId": id }).toArray();

							case 4:
								_story = _context.sent;

								console.log(_story);
								console.log("i am here");
								return _context.abrupt('return', { story: _story });

							case 8:
								_context.next = 10;
								return superagent.get('http://localhost:3000/api').then(function (res) {
									return res.body;
								});

							case 10:
								_ref3 = _context.sent;
								story = _ref3.story;

								console.log("i am here");
								console.log(story);
								return _context.abrupt('return', { story: story });

							case 15:
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
			var story = this.props.story;
			return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'This is the story'), story && _react2.default.createElement('div', null, _react2.default.createElement('h1', null, story.title), _react2.default.createElement('p', null, story.story)));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\story.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\story.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/story")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS5qcz8wYjY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOztJQUFLOzs7Ozs7QUFDWjtBQUNBOzs7Ozs7Ozs7UUFHK0I7UUFBWSxXQUFQLE1BQU87Ozs7Ozs7O2FBQ3RDOzs7QUFDSzs7YUFBTSxJQUFOOztlQUNhLEdBQUcsV0FBVyxTQUFTLEtBQUssRUFBQyxZQUFXLE1BQUs7O1lBQTNEOzBCQUNOOztnQkFBUSxJQUNSO2dCQUFRLElBQUk7eUNBQ0wsRUFBQyxPQUFEOzs7OzBCQUV5QixJQUFJLDZCQUNuQyxLQUFLO2dCQUFPLElBQUk7QUFESTs7O3lCQUFmO3NCQUVOOztnQkFBUSxJQUNSO2dCQUFRLElBQUk7eUNBQ04sRUFBQyxPQUFEOzs7Ozs7Ozs7Ozs7Ozs7QUFFUjs7O2lCQUFZLE9BQU87c0NBQUE7OytIQUVsQjs7Ozs7MkJBRUE7T0FBTSxRQUFRLEtBQUssTUFDbkI7VUFDQyxxQ0FDQyxnREFDQywrQkFDQSxxQ0FDQywwQ0FBSyxZQUNMLDJDQUFJLFlBS1I7Ozs7O0VBaEMyQixnQkFBTSIsImZpbGUiOiI2LmUxODhlNGMzMjZkM2NmYzJkYjRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHN1cGVyYWdlbnQgZnJvbSAnc3VwZXJhZ2VudCdcclxuLy8gaW5zdGFsbCBzdXBlcmFnZW50IGFuZCBjaGVjayB3aGF0IGl0IGRvZXMsIGluc3RhbGwgdXJsLXBhcnNlIHRvIGdldCBob3N0IGFuZCB0aGVuIGFwcGVuZCBob3N0IHRvIHN1cGVyYWdlbnQgdG8gc2VlIGlmIGl0IHN0aWxsIHdvcmtzLlxyXG4vL2FkZCBzdXBlcmFnZW50IHJvdXRlIHdoaWNoIHJlY2VpdmVzIGlkIGFuZCB0aGVuIGZldGNoZXMgdGhhdCBhY2NvcmRpbmcgdG8gbW9uZ2RiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZXEsIHF1ZXJ5OntpZH19KXtcclxuXHRcdGlmKHJlcSl7XHJcblx0XHRcdGNvbnN0IHtkYn0gPSByZXFcclxuXHRcdFx0Y29uc3Qgc3RvcnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmZpbmQoe1wiT2JqZWN0SWRcIjppZH0pLnRvQXJyYXkoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coc3RvcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiaSBhbSBoZXJlXCIpXHJcblx0XHRcdHJldHVybiB7c3Rvcnl9XHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGNvbnN0IHtzdG9yeX0gPSBhd2FpdCBzdXBlcmFnZW50LmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaScpXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuYm9keSlcclxuXHRcdFx0Y29uc29sZS5sb2coXCJpIGFtIGhlcmVcIilcclxuXHRcdFx0Y29uc29sZS5sb2coc3RvcnkpXHJcblx0XHRyZXR1cm4ge3N0b3J5fVxyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdCAgc3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHN0b3J5ID0gdGhpcy5wcm9wcy5zdG9yeVxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxoMT5UaGlzIGlzIHRoZSBzdG9yeTwvaDE+XHJcblx0XHRcdFx0e3N0b3J5ICYmIFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGgxPntzdG9yeS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHQ8cD57c3Rvcnkuc3Rvcnl9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdG9yeS5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=