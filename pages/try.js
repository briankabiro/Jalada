import React, {Component} from 'react';
import Header from '../components/header'
//collection test 2, title, author, content
export default class Test extends Component{
	static async getInitialProps ({req}){
		const {db} = req
		const list = await db.collection('posts').find().sort({ createdAt: -1}).toArray();
		return {list}
	}
	render(){
		const list = this.props.list
		return (
			<div>
			<Header />
				<h1>Hi there, my people</h1>
				<div id="stories-list">
					<ul>
						{
							list.map(story => (
								<div key={story._id}>
									<div></div>
									<i>{story.title}</i> by {story.author}
									<p>{story.story}</p>
								</div>
							))
						}
					</ul>
				</div>
				<style jsx>{`

				`}
				</style>
			</div>
		)
	}
}