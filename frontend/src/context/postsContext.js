import React, { createContext, useContext } from "react"
import { node } from "prop-types"
import { usePosts } from "hooks"

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
	const {
		posts,
		navigation,
		isLoaded,
		error,
		activePage,
		setActivePage
	} = usePosts()

	return (
		<PostsContext.Provider
			value={{
				posts,
				navigation,
				isLoaded,
				error,
				activePage,
				setActivePage
			}}
		>
			{children}
		</PostsContext.Provider>
	)
}

export const usePostsValue = () => useContext(PostsContext)

PostsProvider.propTypes = {
	children: node.isRequired
}
