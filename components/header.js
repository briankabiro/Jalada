import Link from 'next/link'
import Logo from './logo'

export default () => (
	<header>
		<div className="left">
			<Link prefetch href="/">
				<a>
					<span className="logo">
						<Logo />
					</span>
					<span className="title">Jalada</span>
				</a>
			</Link>
		</div>
			<div className="right">
				<Link href="/login">
					<a className="login">login</a>
				</Link>
				<Link href="/signup">
					<a className="signup">
						sign up
					</a>
				</Link>
				<Link href="/editor">
					<a className="editor">Editor</a>
				</Link>
			</div>

		<style jsx>{`
			*{
				color:white;
			}
			header{
				background: black;
				display:flex;
				font-size:14px;
			}
			.logo{
				margin: 4px 5px 2px 4px;
				display: inline-block;
			}

			.left{
				flex:9;
			}
			.right{
				flex:1;
				text-align:right;
				display:flex;
				align-items:center;	
				justify-content:space-between;
			}
			.title{
				font-weight:bold;
				display: inline-block;
				font-size:14px;
				text-decoration:none;
				padding: 8px 10px 8px 4px;
				color: white;
				vertical-align: top;
			}

			a.login, a.signup{
				font-size:11px;
				text-transform: uppercase;
				text-decoration:none;
				color:white;
			}
			.login:hover .signup:hover{
				color:blue;
			}
			.nav{
				display:inline-block;
				vertical-align:top
			}
		`}</style>
	</header>
)