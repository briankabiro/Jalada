'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brain\\Desktop\\dev.to\\Projects\\Jalada\\pages\\editor.js?entry';


var MyEditor = function (_React$Component) {
  (0, _inherits3.default)(MyEditor, _React$Component);

  function MyEditor(props) {
    (0, _classCallCheck3.default)(this, MyEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyEditor.__proto__ || (0, _getPrototypeOf2.default)(MyEditor)).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };
    _this.onChange = function (editorState) {
      return _this.setState({ editorState: editorState });
    };
    return _this;
  }

  (0, _createClass3.default)(MyEditor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_draftJs.Editor, { editorState: this.state.editorState, onChange: this.onChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    }
  }]);

  return MyEditor;
}(_react2.default.Component);

exports.default = MyEditor;