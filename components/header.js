import Link from 'next/link'
import Logo from './logo'
//add box shadow to header
export default () => (
	<header>
		<div className="left">
			<Link prefetch href="/">
				<a>	
					<span className="title">Jalada</span>
				</a>
			</Link>
		</div>
			<div className="right">
				<Link href="/editor">
					<a className="editor">Write</a>
				</Link>				
				<Link href="/login">
					<a className="login">Login</a>
				</Link>
				<Link href="/signup">
					<a className="signup">
						Sign up
					</a>
				</Link>
				<Link href="/about">
					<a className="about">
						About Us
					</a>
				</Link>				
			</div>

		<style jsx>{`
			header{
				display:flex;
				padding:0.5em;	
			}
			.left{
				flex:7;
			}
			.right{
				flex:3;
				text-align:right;
				display:flex;
				align-items:center;	
				justify-content:space-around;
			}
			.title{
				font-weight:bold;
				display: inline-block;
				font-size:1.5em;
				text-decoration:none;
			}

			a.login, a.signup, a.editor, a.about{
				font-size:1.1em;
				text-decoration:none;
			}
			.login:hover .signup:hover{
				color:black;
			}
			@media (max-width: 750px){
				.title{
					font-sizr:1.5em
				}
			}
		`}</style>
	</header>
)