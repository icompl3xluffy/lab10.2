import { useState } from "react"
export default function usePagination(totalItems, itemsPerPage=10, initialPage=1){

    const [currentPage, setCurrentPage]=useState(initialPage)

}