import React from 'react'
import * as superagent from 'superagent'
// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.
//add superagent route which receives id and then fetches that according to mongdb
export default class extends React.Component{

	static async getInitialProps({req, query:{id}}){	
		const {story} = await superagent.get('http://localhost:3000/api/story')
			.then((res) => {
				console.log(res.body)
				return res.body	
			})
			return {story}
	}
	constructor(props) {
	  super(props);
	}
	render(){
		const story = this.props.story
		return(
			<div>
				<h1>This is the story</h1>
				{story && 
					<div>
						<h1>{story.title}</h1>
						<p>{story.story}</p>
					</div>
				}
			</div>
		)
	}
}