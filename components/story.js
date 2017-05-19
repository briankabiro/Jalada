import React, {Component} from 'react'

export default Story extends Component{
	static async getInitialProps({req, query:{id}}){
		const {db} = req;
		const story = await db.collection('posts').find(ObjectId(id)).toArray();
		console.log("This is the story",story)
		return story
	}
	constructor(props) {
	  super(props);
	  this.state = {};
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