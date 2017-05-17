import React from 'react'

export default class extends React.Component{

	static async getInitialProps({req, query:{id}}){
		const {db} = req
		console.log(db)
		const story = await db.collection('posts').find({"_id":id}).toArray();
		console.log(story)
		return story
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