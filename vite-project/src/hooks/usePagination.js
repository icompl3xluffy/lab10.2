import { useState } from "react"
export default function usePagination(totalItems, itemsPerPage=10, initialPage=1){

    const [currentPage, setCurrentPage]=useState(initialPage)
    const totalPage= Math.ceil(totalItems/itemsPerPage)
    const startIndex=(currentPage -1)* itemsPerPage
    const endIndex= Math.min(startIndex+itemsPerPage-1, totalItems - 1)
    const itemsOnCurrentPage= (endIndex -startIndex)+1


    function setPage(pageNumber){
       setCurrentPage( Math.max(1, Math.min(pageNumber, totalPages)) )
    } 


    function nextPage(){

    }
    function prevPage(){}
    
}