import React from "react"
import { usePostsValue } from "context"

export const LoadMessage = () => {
  const { isLoaded } = usePostsValue()

	return isLoaded ? null : <div>Loading...</div>
}