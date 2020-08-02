import React from "react"
import Container from "react-bootstrap/Container"
import { PostsProvider } from "context"
import { ErrorMessage, LoadMessage, Posts } from "components"

const App = () => {
	return (
		<PostsProvider>
			<Container>
				<ErrorMessage />
				<LoadMessage />
				<h1 style={{ textAlign: "center", paddingTop: "10px" }}>
					Welcome To The Blog!
				</h1>

				<Posts />
			</Container>
		</PostsProvider>
	)
}

export default App
