import React from 'react'
// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.
export default class extends React.Component{

	static async getInitialProps({req, query:{id}}){
		if(req){
			const {db} = req
			const story = await db.collection('posts').find({"_id":id}).toArray();
			console.log(story)
			return story				
		}
		const {story} = await superagent.get('http://localhost:3000/api')
			.then(res => res.body)
		return {list}
	}
	constructor(props) {
	  super(props);
	}
	render(){
		const req = this.props.req
		return(
			<div>
				<h1>Hey</h1>
				<p>These are the props<i>{req}</i></p>
			</div>
		)
	}
}