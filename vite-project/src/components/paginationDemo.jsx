import usePagination from "../hooks/usePagination"

const items = []
for (let i = 1; i <= 123; i++) {
  items.push("Item " + i)
}

export default function PaginationDemo() {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(items.length)

  const currentItems = items.slice(startIndex, endIndex + 1)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <p>Total Items: {items.length}</p>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      
      </div>
    </div>
  )
}