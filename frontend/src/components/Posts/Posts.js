import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import { useIndividualPostValue, usePostsValue } from "context"
import { ErrorMessage, LoadMessage, Navigation } from "components"
import "./Posts.css"

export const Posts = () => {
	const { posts } = usePostsValue()
	const { setSelectedPostId } = useIndividualPostValue()

	const handleBtnClick = postId => setSelectedPostId(postId)

	return (
		<Container>
			<ErrorMessage />
			<LoadMessage />
			<h1>Welcome To The Blog!</h1>
			{posts.map(post => (
				<Row key={post.id}>
					<Card>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Text>{post.content}</Card.Text>
							<Card.Text>Written by {post.author}</Card.Text>
							<Button
								variant="primary"
								onClick={() => handleBtnClick(post.id)}
								as={Link}
								to={`/posts/${post.id}`}
							>
								Read More
							</Button>
						</Card.Body>
					</Card>
				</Row>
			))}
			<Navigation />
		</Container>
	)
}
