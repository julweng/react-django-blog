import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import { usePostsValue } from "context"

export const Posts = () => {
	const { posts } = usePostsValue()

	return (
		<>
			{posts.map(post => (
				<Row key={post.id}>
					<Card
						style={{
							width: "100%",
							margin: "10px"
						}}
					>
						<Card.Body>
							<Card.Title style={{ fontSize: "40px" }}>{post.title}</Card.Title>
							<Card.Text>{post.content}</Card.Text>
							<Card.Text>Written by {post.author}</Card.Text>
							<Button
								variant="primary"
								style={{
									backgroundColor: "darkgreen",
									border: "darkgreen 1px solid"
								}}
							>
								Read More
							</Button>
						</Card.Body>
					</Card>
				</Row>
			))}
		</>
	)
}
