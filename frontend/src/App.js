import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const App = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [items, setItems] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await fetch("http://127.0.0.1:8000/posts/?format=json")
        const response = await result.json()  
        setIsLoaded(true)
				setItems(response.results)
      } catch (error) {
        setIsLoaded(true)
        setError(error)
      }
    }

    fetchPosts()
	}, [])

	if (error) {
		return <div>Error: {error.message}</div>
	} else if (!isLoaded) {
		return <div>Loading...</div>
	} else {
		return (
			<div>
				<Container>
					<h1 style={{ textAlign: "center", paddingTop: "10px" }}>
						Welcome To The Blog!
					</h1>
					{items.map(item => (
						<Row key={item.id}>
							<Card
								style={{
									width: "100%",
									margin: "10px"
								}}
							>
								{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
								<Card.Body>
									<Card.Title style={{ fontSize: "40px" }}>
										{item.title}
									</Card.Title>
									<Card.Text>{item.content}</Card.Text>
									<Card.Text>Written by {item.author}</Card.Text>
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
				</Container>
			</div>
		)
	}
}

export default App
