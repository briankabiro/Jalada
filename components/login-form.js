export default () => (
	<div>
		<h4>Login</h4>
		<p>username: <input type="text" /><br/>
		password: <input type="password" /></p>
		<button>login</button>
		<h4>Create Account</h4>
		<p>username: <input type="text" /><br/>
		password: <input type="password" /></p>
		<button>Create Account</button>
		<style jsx>{`
			p{
				line-height:22px;
			}
		`}
		</style>
	</div>
)