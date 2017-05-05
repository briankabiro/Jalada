'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _meta = require('./meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\page.js';
//header, meta, nav, page js

/*
	Get posts and display them on frontpage
	when clicked pass the post data as props
	use the props to display the reading page

	Build draft js page and style it
	connect the page to database so that it is styled
	style about page

*/
exports.default = function () {
	return _react2.default.createElement('div', { className: 'main', 'data-jsx': 206992245,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_meta2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), _react2.default.createElement(_header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), _react2.default.createElement('div', { className: 'page', 'data-jsx': 206992245,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement('div', { className: 'content', 'data-jsx': 206992245,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement('h3', {
		'data-jsx': 206992245,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'Stories')), _react2.default.createElement('div', { className: 'sideMenu', 'data-jsx': 206992245,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	})), _react2.default.createElement(_style2.default, {
		styleId: 206992245,
		css: '.main[data-jsx="206992245"]{width:85%;margin:auto;padding:10px 0 0 0;background-color:white;}.page[data-jsx="206992245"]{color:#828282;background: #fff;padding: 3px 10px;display:-webkit-flex; display:flex;justify-content:space-around;}.content[data-jsx="206992245"]{-webkit-flex:5;-moz-flex:5;flex:5;height:35em;border:1px solid grey;}.content[data-jsx="206992245"] h3[data-jsx="206992245"]{color:grey;padding:0.5em;}.sideMenu[data-jsx="206992245"]{-webkit-flex:2;-moz-flex:2;flex:2;height:20em;border:1px solid aliceblue;}@media (max-width: 750px) {.main[data-jsx="206992245"]{padding:0;width:auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJhLEFBQ0wsNEJBQ0ssVUFDRSxZQUNPLG1CQUNJLHVCQUN2QixDQUNLLDRCQUNTLGNBQ0csaUJBQ0Msa0JBQ0wsbUNBQ2dCLDZCQUM3QixDQUNRLCtCQUNELGtDQUNLLFlBQ1Usc0JBQ3RCLENBQ1csd0RBQ0EsV0FDRyxjQUNkLENBQ1MsZ0NBQ0Ysa0NBQ0ssWUFDZSwyQkFDM0IsQ0FFMEIsMkJBQ3BCLDRCQUNLLFVBQ0MsV0FDWCxDQUNEIiwiZmlsZSI6ImNvbXBvbmVudHNcXHBhZ2UuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL3czYy9Qcm9qZWN0cy9KYWxhZGEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2hlYWRlciwgbWV0YSwgbmF2LCBwYWdlIGpzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBNZXRhIGZyb20gJy4vbWV0YSdcclxuLypcclxuXHRHZXQgcG9zdHMgYW5kIGRpc3BsYXkgdGhlbSBvbiBmcm9udHBhZ2VcclxuXHR3aGVuIGNsaWNrZWQgcGFzcyB0aGUgcG9zdCBkYXRhIGFzIHByb3BzXHJcblx0dXNlIHRoZSBwcm9wcyB0byBkaXNwbGF5IHRoZSByZWFkaW5nIHBhZ2VcclxuXHJcblx0QnVpbGQgZHJhZnQganMgcGFnZSBhbmQgc3R5bGUgaXRcclxuXHRjb25uZWN0IHRoZSBwYWdlIHRvIGRhdGFiYXNlIHNvIHRoYXQgaXQgaXMgc3R5bGVkXHJcblx0c3R5bGUgYWJvdXQgcGFnZVxyXG5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0PE1ldGEgLz5cclxuXHRcdDxIZWFkZXIgLz5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHQ8aDM+U3RvcmllczwvaDM+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZU1lbnVcIj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PHN0eWxlIGpzeD57YFxyXG5cdFx0Lm1haW57XHJcblx0XHRcdHdpZHRoOjg1JTtcclxuXHRcdFx0bWFyZ2luOmF1dG87XHJcblx0XHRcdHBhZGRpbmc6MTBweCAwIDAgMDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHRcdH1cclxuXHRcdC5wYWdle1xyXG5cdFx0XHRjb2xvcjojODI4MjgyO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRwYWRkaW5nOiAzcHggMTBweDtcclxuXHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cdFx0fVxyXG5cdFx0LmNvbnRlbnR7XHJcblx0XHRcdGZsZXg6NTtcclxuXHRcdFx0aGVpZ2h0OjM1ZW07XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxuXHRcdH1cclxuXHRcdC5jb250ZW50IGgze1xyXG5cdFx0XHRjb2xvcjpncmV5O1xyXG5cdFx0XHRwYWRkaW5nOjAuNWVtO1xyXG5cdFx0fVxyXG5cdFx0LnNpZGVNZW51e1xyXG5cdFx0XHRmbGV4OjI7XHJcblx0XHRcdGhlaWdodDoyMGVtO1xyXG5cdFx0XHRib3JkZXI6MXB4IHNvbGlkIGFsaWNlYmx1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuXHRcdFx0Lm1haW57XHJcblx0XHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblx0PC9kaXY+XHJcbilcclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\page.js */'
	}));
};