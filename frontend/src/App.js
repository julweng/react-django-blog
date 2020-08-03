import React from "react"
import { IndividualPostProvider, PostsProvider } from "context"
import { ErrorMessage, LoadMessage, Posts } from "components"
import "./App.css"

const App = () => {
	return (
		<PostsProvider>
			<IndividualPostProvider>
				<ErrorMessage />
				<LoadMessage />
				<h1>Welcome To The Blog!</h1>
				<Posts />
			</IndividualPostProvider>
		</PostsProvider>
	)
}

export default App
