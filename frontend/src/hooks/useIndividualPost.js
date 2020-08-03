import { useEffect, useState } from "react"

export const useIndividualPost = () => {
	const [post, setPost] = useState({
		id: null,
		title: "",
		content: "",
		author: ""
	})

	const [selectedPostId, setSelectedPostId] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchPost = async () => {
			if (selectedPostId) {
				try {
					const result = await fetch(
						`http://127.0.0.1:8000/posts/${selectedPostId}/?format=json`
					)

					const response = await result.json()

					setIsLoaded(true)
					setPost({
						id: response.id,
						title: response.title,
						content: response.content,
						author: response.author
					})
				} catch (error) {
					setIsLoaded(true)
					setError(error)
				}
			}
		}

		fetchPost()
	}, [selectedPostId])

	return {
		post,
		setSelectedPostId,
		isLoaded,
		error
	}
}
