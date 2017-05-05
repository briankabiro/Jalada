'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _logo = require('./logo');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\header.js';

//add box shadow to header
exports.default = function () {
	return _react2.default.createElement('header', {
		'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('div', { className: 'left', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement('span', { className: 'title', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, 'Jalada')))), _react2.default.createElement('div', { className: 'right', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_link2.default, { href: '/editor', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('a', { className: 'editor', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Write')), _react2.default.createElement(_link2.default, { href: '/login', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement('a', { className: 'login', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, 'Login')), _react2.default.createElement(_link2.default, { href: '/signup', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement('a', { className: 'signup', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, 'Sign up')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement('a', { className: 'about', 'data-jsx': 3734881747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'About Us'))), _react2.default.createElement(_style2.default, {
		styleId: 3734881747,
		css: 'header[data-jsx="3734881747"]{display:-webkit-flex; display:flex;padding:0.5em;}.left[data-jsx="3734881747"]{-webkit-flex:7;-moz-flex:7;flex:7;}.right[data-jsx="3734881747"]{-webkit-flex:3;-moz-flex:3;flex:3;text-align:right;display:-webkit-flex; display:flex;align-items:center;justify-content:space-around;}.title[data-jsx="3734881747"]{font-weight:bold;display: inline-block;font-size:1.5em;text-decoration:none;}a.login[data-jsx="3734881747"],a.signup[data-jsx="3734881747"],a.editor[data-jsx="3734881747"],a.about[data-jsx="3734881747"]{font-size:1.1em;text-decoration:none;}.login[data-jsx="3734881747"]:hover .signup[data-jsx="3734881747"]:hover{color:black;}@media (max-width: 750px){.title[data-jsx="3734881747"]{font-sizr:1.5em}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmMsQUFDSiw4QkFDTyxtQ0FDQyxjQUNkLENBQ0ssNkJBQ0Usa0NBQ1AsQ0FDTSw4QkFDQyxrQ0FDVSxpQkFDSixtQ0FDTSxtQkFDVSw2QkFDN0IsQ0FDTSw4QkFDVyxpQkFDSyxzQkFDTixnQkFDSyxxQkFDckIsQ0FFb0MsOEhBQ3BCLGdCQUNLLHFCQUNyQixDQUMwQix5RUFDZCxZQUNaLENBQ3lCLDBCQUNsQiw4QkFFTixnQkFDRCIsImZpbGUiOiJjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL3czYy9Qcm9qZWN0cy9KYWxhZGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcclxuLy9hZGQgYm94IHNoYWRvdyB0byBoZWFkZXJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cdDxoZWFkZXI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuXHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8YT5cdFxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5KYWxhZGE8L3NwYW4+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvZWRpdG9yXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJlZGl0b3JcIj5Xcml0ZTwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHRcdFx0XHRcclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJsb2dpblwiPkxvZ2luPC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwic2lnbnVwXCI+XHJcblx0XHRcdFx0XHRcdFNpZ24gdXBcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0QWJvdXQgVXNcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRoZWFkZXJ7XHJcblx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdHBhZGRpbmc6MC41ZW07XHRcclxuXHRcdFx0fVxyXG5cdFx0XHQubGVmdHtcclxuXHRcdFx0XHRmbGV4Ojc7XHJcblx0XHRcdH1cclxuXHRcdFx0LnJpZ2h0e1xyXG5cdFx0XHRcdGZsZXg6MztcclxuXHRcdFx0XHR0ZXh0LWFsaWduOnJpZ2h0O1xyXG5cdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHRcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cdFx0XHR9XHJcblx0XHRcdC50aXRsZXtcclxuXHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRmb250LXNpemU6MS41ZW07XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGEubG9naW4sIGEuc2lnbnVwLCBhLmVkaXRvciwgYS5hYm91dHtcclxuXHRcdFx0XHRmb250LXNpemU6MS4xZW07XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0LmxvZ2luOmhvdmVyIC5zaWdudXA6aG92ZXJ7XHJcblx0XHRcdFx0Y29sb3I6YmxhY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuXHRcdFx0XHQudGl0bGV7XHJcblx0XHRcdFx0XHRmb250LXNpenI6MS41ZW1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHQ8L2hlYWRlcj5cclxuKSJdfQ== */\n/*@ sourceURL=components\\header.js */'
	}));
};