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
					<span className="title">Waraka</span>
				</a>
			</Link>
		</div>
			<div className="right">
				<Link href="/login">
					<a className="login">login</a>
				</Link>
				<Link>
					<a className="signup">
						sign up
					</a>
				</Link>
			</div>

		<style jsx>{`
			header{
				background: #ffa52a;
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
			}
			.title{
				font-weight:bold;
				display: inline-block;
				font-size:14px;
				text-decoration:none;
				padding: 8px 10px 8px 4px;
				color: #000;
				vertical-align: top;
			}

			a.login{
				padding: 10px;
				display: inline-block;
				font-size:11px;
				text-transform: uppercase;
				text-decoration:none;
				color:#000;
			}
			.login:hover{
				color:#fff;
			}

			.nav{
				display:inline-block;
				vertical-align:top
			}
		`}</style>
	</header>
)