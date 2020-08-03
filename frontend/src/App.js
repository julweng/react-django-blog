import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { IndividualPostProvider, PostsProvider } from "context"
import { IndividualPost, Posts } from "components"

const App = () => {
	return (
		<PostsProvider>
			<IndividualPostProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Posts} />
						<Route exact path="/posts/:postId" component={IndividualPost} />
					</Switch>
				</Router>
			</IndividualPostProvider>
		</PostsProvider>
	)
}

export default App
