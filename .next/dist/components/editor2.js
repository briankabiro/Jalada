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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _slate = require('slate');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _slate.Raw.deserialize({
  nodes: [{
    kind: 'block',
    type: 'paragraph',
    nodes: [{
      kind: 'text',
      "text": "text"
    }]
  }]
}, { terse: true });

var schema = {
  nodes: {
    'block-quote': function blockQuote(props) {
      return _react2.default.createElement('blockquote', props.attributes, props.children);
    },
    'bulleted-list': function bulletedList(props) {
      return _react2.default.createElement('ul', props.attributes, props.children);
    },
    'heading-one': function headingOne(props) {
      return _react2.default.createElement('h1', props.attributes, props.children);
    },
    'heading-two': function headingTwo(props) {
      return _react2.default.createElement('h2', props.attributes, props.children);
    },
    'list-item': function listItem(props) {
      return _react2.default.createElement('li', props.attributes, props.children);
    },
    'numbered-list': function numberedList(props) {
      return _react2.default.createElement('ol', props.attributes, props.children);
    }
  },
  marks: {
    bold: {
      fontWeight: 'bold'
    },
    code: {
      fontFamily: 'monospace',
      backgroundColor: '#eee',
      padding: '3px',
      borderRadius: '4px'
    },
    italic: {
      fontStyle: 'italic'
    },
    underlined: {
      textDecoration: 'underline'
    }
  }
};

var Editor2 = function (_React$Component) {
  (0, _inherits3.default)(Editor2, _React$Component);

  function Editor2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Editor2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Editor2.__proto__ || (0, _getPrototypeOf2.default)(Editor2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      state: initialState
    }, _this.hasMark = function (type) {
      var state = _this.state.state;

      return state.marks.some(function (mark) {
        return mark.type == type;
      });
    }, _this.hasBlock = function (type) {
      var state = _this.state.state;

      return state.blocks.some(function (node) {
        return node.type == type;
      });
    }, _this.onChange = function (state) {
      _this.setState({ state: state });
    }, _this.onKeyDown = function (e, data, state) {
      if (!data.isMod) return;
      var mark = void 0;

      switch (data.key) {
        case 'b':
          mark = 'bold';
          break;
        case 'i':
          mark = 'italic';
          break;
        case 'u':
          mark = 'underlined';
        case '`':
          mark = 'code';
          break;
        default:
          return;
      }

      state = state.transform().toggleMark(mark).apply();

      e.preventDefault();
      return state;
    }, _this.render = function () {
      return _react2.default.createElement('div', null, _this.renderToolbar(), _this.renderEditor());
    }, _this.renderEditor = function () {
      return _react2.default.createElement('div', null, _react2.default.createElement(_slate.Editor, {
        state: _this.state.state,
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        placeholder: 'Start writing',
        schema: schema
      }));
    }, _this.renderToolbar = function () {
      return _react2.default.createElement('div', { className: 'menu toolbar-menu', 'data-jsx': 655780472
      }, _this.renderMarkButton('bold', 'format_bold'), _this.renderMarkButton('italic', 'format_italic'), _this.renderMarkButton('underlined', 'format_underlined'), _this.renderMarkButton('code', 'code'), _react2.default.createElement(_style2.default, {
        styleId: 655780472,
        css: '.menu[data-jsx="655780472"] > *[data-jsx="655780472"] {display:inline-block;}.menu[data-jsx="655780472"] > *[data-jsx="655780472"] + *[data-jsx="655780472"] {margin-left:15px;}.toolbar-menu[data-jsx="655780472"]{padding: 1px 0 17px 18px;margin:0 -20px;margin-bottom:20px;border-bottom: 2-x solid #eee;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVkaXRvcjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhvQixBQUNDLHVEQUNZLHFCQUN0QixDQUNjLGlGQUNJLGlCQUNsQixDQUNhLG9DQUNhLHlCQUNWLGVBQ0ksbUJBQ1csOEJBQy9CIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVkaXRvcjIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL3czYy9Qcm9qZWN0cy9KYWxhZGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvciwgUmF3fSBmcm9tICdzbGF0ZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gUmF3LmRlc2VyaWFsaXplKHtcclxuICBub2RlczpbIFxyXG4gICAge1xyXG4gICAgICBraW5kOidibG9jaycsXHJcbiAgICAgIHR5cGU6J3BhcmFncmFwaCcsXHJcbiAgICAgIG5vZGVzOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICBraW5kOid0ZXh0JyxcclxuICAgICAgICAgIFwidGV4dFwiOlwidGV4dFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7dGVyc2U6IHRydWV9KVxyXG5cclxuY29uc3Qgc2NoZW1hID0ge1xyXG4gIG5vZGVzOiB7XHJcbiAgICAnYmxvY2stcXVvdGUnOiBwcm9wcyA9PiA8YmxvY2txdW90ZSB7Li4ucHJvcHMuYXR0cmlidXRlc30+e3Byb3BzLmNoaWxkcmVufTwvYmxvY2txdW90ZT4sXHJcbiAgICAnYnVsbGV0ZWQtbGlzdCc6IHByb3BzID0+IDx1bCB7Li4ucHJvcHMuYXR0cmlidXRlc30+e3Byb3BzLmNoaWxkcmVufTwvdWw+LFxyXG4gICAgJ2hlYWRpbmctb25lJzogcHJvcHMgPT4gPGgxIHsuLi5wcm9wcy5hdHRyaWJ1dGVzfT57cHJvcHMuY2hpbGRyZW59PC9oMT4sXHJcbiAgICAnaGVhZGluZy10d28nOiBwcm9wcyA9PiA8aDIgey4uLnByb3BzLmF0dHJpYnV0ZXN9Pntwcm9wcy5jaGlsZHJlbn08L2gyPixcclxuICAgICdsaXN0LWl0ZW0nOiBwcm9wcyA9PiA8bGkgey4uLnByb3BzLmF0dHJpYnV0ZXN9Pntwcm9wcy5jaGlsZHJlbn08L2xpPixcclxuICAgICdudW1iZXJlZC1saXN0JzogcHJvcHMgPT4gPG9sIHsuLi5wcm9wcy5hdHRyaWJ1dGVzfT57cHJvcHMuY2hpbGRyZW59PC9vbD4sXHJcbiAgfSxcclxuICBtYXJrczoge1xyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgIH0sXHJcbiAgICBjb2RlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcclxuICAgICAgcGFkZGluZzogJzNweCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCdcclxuICAgIH0sXHJcbiAgICBpdGFsaWM6IHtcclxuICAgICAgZm9udFN0eWxlOiAnaXRhbGljJ1xyXG4gICAgfSxcclxuICAgIHVuZGVybGluZWQ6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIFxyXG4gIHN0YXRlID0ge1xyXG4gICAgc3RhdGU6IGluaXRpYWxTdGF0ZSwgICAgXHJcbiAgfVxyXG5cclxuICBoYXNNYXJrID0gKHR5cGUpID0+IHtcclxuICAgIGNvbnN0IHtzdGF0ZX0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gc3RhdGUubWFya3Muc29tZShtYXJrID0+IG1hcmsudHlwZSA9PSB0eXBlKVxyXG4gIH1cclxuXHJcbiAgaGFzQmxvY2sgPSAodHlwZSkgPT4ge1xyXG4gICAgY29uc3Qge3N0YXRlfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiBzdGF0ZS5ibG9ja3Muc29tZShub2RlID0+IG5vZGUudHlwZSA9PSB0eXBlKVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSAoc3RhdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0ZSB9KVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duID0gKGUsIGRhdGEsIHN0YXRlKSA9PiB7XHJcbiAgICBpZighZGF0YS5pc01vZCkgcmV0dXJuXHJcbiAgICAgIGxldCBtYXJrXHJcblxyXG4gICAgICBzd2l0Y2goZGF0YS5rZXkpe1xyXG4gICAgICAgIGNhc2UgJ2InOlxyXG4gICAgICAgICAgbWFyayA9ICdib2xkJ1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdpJzpcclxuICAgICAgICAgIG1hcmsgPSAnaXRhbGljJ1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd1JzpcclxuICAgICAgICAgIG1hcmsgPSAndW5kZXJsaW5lZCdcclxuICAgICAgICBjYXNlICdgJzpcclxuICAgICAgICAgIG1hcmsgPSAnY29kZSdcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZSA9IHN0YXRlXHJcbiAgICAgICAgLnRyYW5zZm9ybSgpXHJcbiAgICAgICAgLnRvZ2dsZU1hcmsobWFyaylcclxuICAgICAgICAuYXBwbHkoKVxyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5yZW5kZXJUb29sYmFyKCl9XHJcbiAgICAgICAge3RoaXMucmVuZGVyRWRpdG9yKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyRWRpdG9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICBzdGF0ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU3RhcnQgd3JpdGluZyd9XHJcbiAgICAgICAgICBzY2hlbWEgPSB7c2NoZW1hfVxyXG4gICAgICAgICAvPiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSBcclxuICB9XHJcblxyXG4gIHJlbmRlclRvb2xiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSBcIm1lbnUgdG9vbGJhci1tZW51XCI+XHJcbiAgICAgICAge3RoaXMucmVuZGVyTWFya0J1dHRvbignYm9sZCcsICdmb3JtYXRfYm9sZCcpfVxyXG4gICAgICAgIHt0aGlzLnJlbmRlck1hcmtCdXR0b24oJ2l0YWxpYycsICdmb3JtYXRfaXRhbGljJyl9XHJcbiAgICAgICAge3RoaXMucmVuZGVyTWFya0J1dHRvbigndW5kZXJsaW5lZCcsICdmb3JtYXRfdW5kZXJsaW5lZCcpfVxyXG4gICAgICAgIHt0aGlzLnJlbmRlck1hcmtCdXR0b24oJ2NvZGUnLCAnY29kZScpfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5tZW51ID4gKiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgfSAgICBcclxuICAgICAgICAgIC5tZW51ID4gKiArICoge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRvb2xiYXItbWVudXtcclxuICAgICAgICAgICAgcGFkZGluZzogMXB4IDAgMTdweCAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MCAtMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAyLXggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlck1hcmtCdXR0b24gPSAodHlwZSxpY29uKSA9PiB7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuaGFzTWFyayh0eXBlKVxyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBlID0+IHRoaXMub25DbGlja01hcmsoZSwgdHlwZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn0gZGF0YS1hY3RpdmU9e2lzQWN0aXZlfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntpY29ufTwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSAgICBcclxuICB9ICBcclxufSJdfQ== */\n/*@ sourceURL=components\\editor2.js */'
      }), '}');
    }, _this.renderMarkButton = function (type, icon) {
      var isActive = _this.hasMark(type);
      var onMouseDown = function onMouseDown(e) {
        return _this.onClickMark(e, type);
      };
      return _react2.default.createElement('span', { className: 'button', onMouseDown: onMouseDown, 'data-active': isActive }, _react2.default.createElement('span', { className: 'material-icons' }, icon));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Editor2;
}(_react2.default.Component);

exports.default = Editor2;