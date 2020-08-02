import React from "react"
import { PostsProvider } from "context"
import { ErrorMessage, LoadMessage, Posts } from "components"
import "./App.css"

const App = () => {
	return (
		<PostsProvider>
			<ErrorMessage />
			<LoadMessage />
			<h1>Welcome To The Blog!</h1>
			<Posts />
		</PostsProvider>
	)
}

export default App
