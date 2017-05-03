webpackHotUpdate(5,{

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(92);

var _extends3 = _interopRequireDefault(_extends2);

var _slate = __webpack_require__(765);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\editor.js';


var initialState = _slate.Raw.deserialize({
  nodes: [{
    kind: 'block',
    type: 'paragraph',
    nodes: [{
      kind: 'text',
      text: 'A line of text in a paragraph'
    }]
  }]
}, { terse: true });

function CodeNode(props) {
  return _react2.default.createElement('pre', (0, _extends3.default)({}, props.attributes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('code', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.children));
}

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      state: initialState
    }, _this.onChange = function (state) {
      _this.setState({ state: state });
    }, _this.onKeyDown = function (event, data, state) {
      if (event.which != 192 || !event.metaKey) return;
      event.preventDefault();
      var isCode = state.blocks.some(function (block) {
        return block.type == 'code';
      });
      return state.transform().setBlock(isCode ? 'paragraph' : 'code').apply();
    }, _this.render = function () {
      return _react2.default.createElement(_slate.Editor, {
        schema: _this.state.schema,
        state: _this.state.state,
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return App;
}(_react2.default.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\editor.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\editor.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VkaXRvci5qcz8xMTJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdCOztBQUNUOzs7Ozs7Ozs7QUFFUCxJQUFNLDBCQUFtQjs7VUFJbkI7VUFDQTs7WUFHSTtZQUFLO0FBREwsS0FGRTtBQUZOLEdBRkU7QUFBTixDQURtQixFQWFsQixFQUFDLE9BQU87O0FBRVgsU0FBUyxTQUFTLE9BQ2hCO3lCQUFPLGdEQUFTLE1BQU07O2dCQUFmO2tCQUEyQjtBQUEzQjtBQUFBLHNCQUEyQjs7Z0JBQUE7a0JBQU87QUFBUDtBQUFBLFdBQ25DOzs7SUFFb0I7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQjthQUNTO0FBQVAsYUFPRixXQUFXLFVBQUMsT0FDVjtZQUFLLFNBQVMsRUFBQyxPQUNoQjthQUNELFlBQVksVUFBQyxPQUFPLE1BQU0sT0FDeEI7VUFBRyxNQUFNLFNBQVMsT0FBTyxDQUFDLE1BQU0sU0FDOUI7WUFDRjtVQUFNLGVBQWUsT0FBTyxLQUFLO2VBQVMsTUFBTSxRQUFRO0FBQ3RELE9BRGE7YUFDTixNQUNOLFlBQ0EsU0FBUyxTQUFRLGNBQWMsUUFFckM7YUFFQyxTQUFTLFlBQ1A7NkJBQ0c7Z0JBQ1MsTUFBSyxNQUNiO2VBQU8sTUFBSyxNQUNaO2tCQUFVLE1BQ1Y7bUJBQVcsTUFBSzs7b0JBSmxCO3NCQU9IO0FBUEc7QUFDRSxPQURGOzs7OztFQXhCMkIsZ0JBQU07O2tCQUFsQixJIiwiZmlsZSI6IjUuNDU1OTRlZDNjMWExMDU0NmEzNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yLCBSYXd9IGZyb20gJ3NsYXRlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBSYXcuZGVzZXJpYWxpemUoe1xyXG4gIG5vZGVzOltcclxuICAgIHtcclxuICAgICAga2luZDonYmxvY2snLFxyXG4gICAgICB0eXBlOidwYXJhZ3JhcGgnLFxyXG4gICAgICBub2RlczpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2luZDondGV4dCcsXHJcbiAgICAgICAgICB0ZXh0OidBIGxpbmUgb2YgdGV4dCBpbiBhIHBhcmFncmFwaCdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbn0sIHt0ZXJzZTogdHJ1ZX0pXHJcblxyXG5mdW5jdGlvbiBDb2RlTm9kZShwcm9wcyl7XHJcbiAgcmV0dXJuIDxwcmUgey4uLnByb3BzLmF0dHJpYnV0ZXN9Pjxjb2RlPntwcm9wcy5jaGlsZHJlbn08L2NvZGU+PC9wcmU+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHN0YXRlOiBpbml0aWFsU3RhdGVcclxuICB9XHJcbiAgc2NoZW1hOntcclxuICAgIG5vZGVzOntcclxuICAgICAgY29kZTogQ29kZU5vZGVcclxuICAgIH1cclxuICB9XHJcbiAgb25DaGFuZ2UgPSAoc3RhdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlfSlcclxuICB9XHJcbiAgb25LZXlEb3duID0gKGV2ZW50LCBkYXRhLCBzdGF0ZSkgPT4ge1xyXG4gICAgaWYoZXZlbnQud2hpY2ggIT0gMTkyIHx8ICFldmVudC5tZXRhS2V5KSByZXR1cm5cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlzQ29kZSA9IHN0YXRlLmJsb2Nrcy5zb21lKGJsb2NrID0+IGJsb2NrLnR5cGUgPT0gJ2NvZGUnKVxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgLnRyYW5zZm9ybSgpXHJcbiAgICAgIC5zZXRCbG9jayhpc0NvZGU/ICdwYXJhZ3JhcGgnIDogJ2NvZGUnKVxyXG4gICAgICAuYXBwbHkoKVxyXG59XHJcblxyXG4gIHJlbmRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxFZGl0b3JcclxuICAgICAgICBzY2hlbWE9e3RoaXMuc3RhdGUuc2NoZW1hfVxyXG4gICAgICAgIHN0YXRlPXt0aGlzLnN0YXRlLnN0YXRlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XHJcbiAgICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==