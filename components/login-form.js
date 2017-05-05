import Link from 'next/link'
export default () => (
	<div className="container">
		<h4>Login</h4>
		<p><input type="text" placeholder="Your Username"/><br/>
		<input type="password" placeholder="Password" /></p>
		<button>login</button>
		<p>Don't have an account?
			<Link href="/signup">
				<a>Create Account</a>
			</Link>
		</p>
		<style jsx>{`
			.container{
				display:flex;
				flex-direction:column;
				align-items:center;
			}
			h4{
				font-size:1.2em
			}
			.container input{
				margin:0.5em;
				padding:0.5em;
			}
			button{
				background-color:blue;
				padding:0.5em;
				border:none;
				border-radius:5%;
				width:5em;
				color:white;
			}
			p{
				line-height:22px;
			}
		`}
		</style>
	</div>
)