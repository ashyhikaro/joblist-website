import '../styles/pagination.css'

import ArrowRight from '../image/icons/arrowright.png'
import ArrowLeft from '../image/icons/arrowleft.png'
import Separator from '../image/icons/separator.png'

interface Props {
    jobsPerPage: number;
    totalJobs: number;
    page: number;
    paginate: (number: number) => void;
    nextPage: () => void;
    prevPage: () => void;
}

const Pagination = ({jobsPerPage, totalJobs, paginate, nextPage, prevPage, page}: Props) => {
    const pageNumbers: Array<number> = []

    for(let i = 1; i <= Math.ceil(totalJobs/jobsPerPage); i++) {
        pageNumbers.push(i)
    }
   
    return (
        <div className='pagination_container flex bg-white items-center justify-between mx-auto mb-16 mt-12'>
            <button className="pagination__btn btn ml-6" onClick={() => page === 1 ? null : prevPage()}>
                <img src={ArrowLeft} alt="Arrow left" />
            </button>
            <img src={Separator} alt="" style={{height: '31.2px'}} className='mr-14 ml-6'/>

            <ul className="pagination flex items-center gap-4">
                {
                    pageNumbers.map( number => {
                        if (number === page) {
                            return (
                                <li className="page_item" key={number}>
                                    <a href="" className="page_link flex items-center page_link_active" onClick={(e) => {
                                        e.preventDefault()
                                        paginate(number)
                                    }}>{number}</a>
                                </li>
                            )
                        } else {
                            return (
                                <li className="page_item" key={number}>
                                    <a href="" className="page_link flex items-center" onClick={(e) => {
                                        e.preventDefault()
                                        paginate(number)
                                    }}>{number}</a>
                                </li>
                            )  
                        }
                    })
                }
            </ul>

            <img src={Separator} alt="" style={{height: '31.2px'}} className='ml-14 mr-6'/>
            <button className="pagination__btn btn mr-6" onClick={() => page === pageNumbers[pageNumbers.length - 1] ? null : nextPage()}>
                <img src={ArrowRight} alt="Arrow right" />
            </button>
        </div>
    )
}

export default Pagination;