import React from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { useIndividualPostValue } from "context"
import { ErrorMessage, LoadMessage } from "components"
import "./IndividualPost.css"

export const IndividualPost = () => {
	const { post } = useIndividualPostValue()

	return (
		<Container className="individual-post__container">
			<ErrorMessage />
			<LoadMessage />
			<h1>{post.title}</h1>
			<h4>by {post.author}</h4>
			<p>{post.content}</p>
			<Button variant="primary" as={Link} to="/">
				Back
			</Button>
		</Container>
	)
}
