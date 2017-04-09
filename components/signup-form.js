import Link from 'next/link'
export default () => (
	<div>
		<h4>Create Account</h4>
		<p>username: <input type="text" /><br/>
		password: <input type="password" /></p>
		<button>Create Account</button>
		<p>Already have an account?
			<Link href="/login">
				<a>Login here</a>
			</Link>
		</p>
		<style jsx>{`
			p{
				line-height:22px;
			}
		`}
		</style>
	</div>
)