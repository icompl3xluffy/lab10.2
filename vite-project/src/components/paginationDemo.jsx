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

      <button onClick={prevPage} disabled={!canPrevPage}>Previous</button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={nextPage} disabled={!canNextPage}>Next</button>

      <p>
        Showing items {startIndex + 1} - {endIndex + 1} (Total on this page: {itemsOnCurrentPage})
      </p>
        <div>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            disabled={num === currentPage}
          >
            {num}
          </button>
        ))}
      </div>
      
    </div>
  )
}