import s from "./Paginator.module.css";
import cn from "classnames"
import React, {useState} from "react";

type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    portionSize: number
    currentPage?: number
    onPageChanged?: (pageNumber:number) => void
}


const Paginator:React.FC<PaginatorType> = ({
                                               totalItemsCount,
                                               pageSize,
                                               portionSize,
                                               currentPage,
                                               onPageChanged = x => x,
                                           }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>

            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span key={p}
                             onClick={() => {onPageChanged(p)}}
                             className={cn({[s.selectedPage]: currentPage === p}, s.paginationItem)}>{p}</span>
            })}

            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}

        </div>
    )
}
export default Paginator;