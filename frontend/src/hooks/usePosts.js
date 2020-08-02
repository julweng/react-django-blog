import { useEffect, useState } from "react"

export const usePosts = () => {
	const [posts, setPosts] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const result = await fetch("http://127.0.0.1:8000/posts/?format=json")
				const response = await result.json()
				setIsLoaded(true)
				setPosts(response.results)
			} catch (error) {
				setIsLoaded(true)
				setError(error)
			}
		}

		fetchPosts()
	}, [])

	return {
		posts,
		isLoaded,
		error
	}
}
