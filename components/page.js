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
export default () => (
	<div className="main">
		<Meta />
		<Header />
	<div className="page">
		<div className="content">
			<h3>Stories</h3>
		</div>
		<div className="sideMenu">

		</div>
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
			display:flex;
			justify-content:space-around;
		}
		.content{
			flex:5;
			height:35em;
			border:1px solid grey;
		}
		.content h3{
			color:grey;
			padding:0.5em;
		}
		.sideMenu{
			flex:2;
			height:20em;
			border:1px solid aliceblue;
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

