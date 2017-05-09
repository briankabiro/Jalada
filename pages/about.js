import Header from '../components/header'
export default () => (
	<div className="container">
		<Header />
		<div id="content">
			<h2>About</h2>
				<p>
				Have you ever submitted your post to a newspaper and 
				been rejected because there wasn't any space? 
				The newspaper might be the only trusted medium of information in our country and even that might be changing.
				</p>
				<p>
				Online news sites (you know them) have a reputation for headlines that will sell advertisements 
				and worst of all carry gossip. Think about how many times you have read items from certain outlets only for you 
				to feel  that you have been deceived.
				</p>
				Facebook has become popular because they are easily shareable but the 
				we have turned to it because it is the best option.
				Waraka wants to be the chatroom of a nation and where opinions and points of view
				are expressed. 
				<p>
				Not everyone of us can afford a newspaper or get the chance to read one everyday
				Your opinion will withstand tear and we will be visible and always accessible.
				Every Kenyan has a voice, a right to be heard, and above all, ideas.
				Ideas are what will take our country forward and sharing them is the first step.
				Waraka wants to make that easier.
				</p>
				<p>
				Although there is a huge chance that we might fail, we are prepared to take that risk.
				Speak Kenya, Speak
				</p>
		</div>
		<style jsx>{`
			.container{
				text-align:center;
				display:flex;
				flex-flow:column nowrap;
				align-items:center;
			}
			#content{
				width:50%;
			}
			h2{
				text-align:center;
			}
		`}</style>
	</div>
)
