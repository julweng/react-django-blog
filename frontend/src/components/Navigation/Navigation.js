import React from "react"
import Pagination from "react-bootstrap/Pagination"
import { usePostsValue } from "context"

const COUNT_PER_PAGE = 10

export const Navigation = () => {
	const {
		navigation: { count, next, previous },
		activePage,
		setActivePage
	} = usePostsValue()

	const pages = Math.ceil(count / COUNT_PER_PAGE)

	const pageArr = Array.from(Array(pages), (_, i) => i + 1)

	const handlePageClick = page => setActivePage(page)

	const handlePreviousClick = () => setActivePage(activePage - 1)

	const handleNextClick = () => setActivePage(activePage + 1)

	return (
		<Pagination>
			<Pagination.Prev
				className={previous ? "" : "disabled"}
				onClick={() => handlePreviousClick()}
			/>
			{pageArr.length &&
				pageArr.map(page => (
					<Pagination.Item
						key={page}
						active={activePage === page}
						onClick={() => handlePageClick(page)}
					>
						{page}
					</Pagination.Item>
				))}
			<Pagination.Next
				className={next ? "" : "disabled"}
				onClick={() => handleNextClick()}
			/>
		</Pagination>
	)
}
