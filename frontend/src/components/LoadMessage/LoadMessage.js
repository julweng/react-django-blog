import React from "react"
import { useIndividualPostValue, usePostsValue } from "context"

export const LoadMessage = () => {
	const { isLoaded } = usePostsValue()
	const { isLoaded: isIndividualPostLoaded } = useIndividualPostValue()
	return isLoaded || isIndividualPostLoaded ? null : <div>Loading...</div>
}
