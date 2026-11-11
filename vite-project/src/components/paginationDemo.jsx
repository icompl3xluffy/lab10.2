import usePagination from "../hooks/usePagination"

import usePagination from "../hooks/usePagination"



export default function PaginationDemo() {
    const items = []

for (let i = 1; i <= 123; i++) {
  items.push("Item " + i)
}
  const { currentPage, totalPages } = usePagination(items.length)

  return <p>Page {currentPage} of {totalPages}</p>
}