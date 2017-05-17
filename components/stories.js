import React, {Component} from 'react';
import Link from 'next/link'

export default class Stories extends Component{
	static async getInitialProps ({req}){
		const {db} = req
		const list = await db.collection('posts').find().sort({ createdAt: -1}).toArray();
		return {list}
	}
	render(){
		const list = this.props.list
		return (
			<div className="container">
				<h1>Stories</h1>
				<div id="stories-list">
					<ul>
						{
							list.map(story => (
								<Link href={{pathname:'story', query:{id:story._id}}}>
									<div className = "story" key={story._id}>
										<h2>{story.title}</h2>
										<p>{story.story}</p>
										<div className = "details-div">
											<div id="picture-div"></div>
											<div id="name-and-time-div">
												<span>{story.author}</span>
												<span>{story.time}h ago // {story.time} min read</span>
											</div>
										</div>								
									</div>
								</Link>
							))
						}
					</ul>
				</div>
				<style jsx>{`
					.container{
						width:70%;
					}
					.story{
						border-bottom: 1px solid grey;
						padding-bottom:1em;
					}
					.details-div{
						display:flex;
						flex-flow:row;
					}
					#picture-div{
						width:3em;
						height:3em;
						background-color:indigo;
						border-radius:100%;
						margin-right:0.5em;
					}
					#name-and-time-div{
						display:flex;
						flex-direction:column;
						justify-content:space-around;
					}
				`}
				</style>
			</div>
		)
	}
}