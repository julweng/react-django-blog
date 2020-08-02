import React from "react"
import { usePostsValue } from "context"

export const ErrorMessage = () => {
	const { error } = usePostsValue()

	return error ? <div>Error: {error.message}</div> : null
}
