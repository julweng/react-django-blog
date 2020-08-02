import { useEffect, useState } from "react"

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [navigation, setNavigation] = useState({
    count: 0,
    next: false,
    previous: false
  })
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
    const selectedPage = activePage > 1 ? `&page=${activePage}` : ""
    
    const fetchPosts = async () => {
			try {
				const result = await fetch(`http://127.0.0.1:8000/posts/?format=json${selectedPage}`)
        const response = await result.json()
        setIsLoaded(true)
        setPosts(response.results)
        setNavigation({
          count: response.count,
          next: response.next,
          previous: response.previous
        })

			} catch (error) {
				setIsLoaded(true)
				setError(error)
			}
		}

		fetchPosts()
	}, [activePage])

	return {
    posts,
    navigation,
		isLoaded,
    error,
    activePage,
    setActivePage
	}
}
