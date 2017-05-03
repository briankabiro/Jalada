'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slate = require('slate');

var _react = require('react');

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