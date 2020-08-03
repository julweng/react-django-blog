import React, { createContext, useContext } from "react"
import { node } from "prop-types"
import { useIndividualPost } from "hooks"

export const IndividualPostContext = createContext()

export const IndividualPostProvider = ({ children }) => {
	const { post, setSelectedPostId, isLoaded, error } = useIndividualPost()

	return (
		<IndividualPostContext.Provider
			value={{
				post,
				setSelectedPostId,
				isLoaded,
				error
			}}
		>
			{children}
		</IndividualPostContext.Provider>
	)
}

export const useIndividualPostValue = () => useContext(IndividualPostContext)

IndividualPostProvider.propTypes = {
	children: node.isRequired
}
