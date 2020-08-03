import React from "react"
import { useIndividualPostValue, usePostsValue } from "context"

export const ErrorMessage = () => {
	const { error } = usePostsValue()
	const { error: individualPostError } = useIndividualPostValue()

	return error ? (
		<div>Error: {error.message || individualPostError.message}</div>
	) : null
}
