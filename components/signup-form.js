import Link from 'next/link'
export default () => (
	<div className="container">
		<h4>Create Account</h4>
		<p>
		<input type="text" placeholder="Your Email Address"/><br/>
		<input type="text" placeholder="Choose a Username"/><br/>
		<input type="password" placeholder="Password"/></p>
		<button>Create Account</button>
		<p>Already have an account?
			<Link href="/login">
				<a>Login here</a>
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
				width:10em;
				color:white;
			}			
		`}
		</style>
	</div>
)