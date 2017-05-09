import React, {Component} from 'react';
//collection test 2, title, author, content
export default class Test extends Component{
	static async get InitialProps ({req}){
		const {db} = req
		const list = await db.collection('test2').find().sort({ createdAt: -1}).toArray();
		return {list}
	}
	render(){
		const list = this.props.list
		return (
			<div><h1>Hi there, my people</h1></div>
			<div id="stories-list">
				<ul>
					{
						list.map(book => (
							<div key={story._id}>
								<i>{story.title}</i> by {story.author}
							</div>
						))
					}
				</ul>
			</div>
		)
	}
}