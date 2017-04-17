//header, meta, nav, page js
import Header from './header'
import Meta from './meta'
/*
	Get posts and display them on frontpage
	when clicked pass the post data as props
	use the props to display the reading page

	Build draft js page and style it
	connect the page to database so that it is styled
	style about page

*/
export default ({ children }) => (
	<div className="main">
		<Meta />
		<Header />
	<div className="page">
		{children}
	</div>

	<style jsx>{`
		.main{
			width:85%;
			margin:auto;
			padding:10px 0 0 0;
			background-color:white;
		}
		.page{
			color:#828282;
			background: #fff;
			padding: 3px 10px;
		}

		@media (max-width: 750px) {
			.main{
				padding:0;
				width:auto;
			}
		}
	`}</style>
	</div>
)

