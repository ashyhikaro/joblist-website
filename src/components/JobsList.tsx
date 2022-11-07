import '../styles/jobs.css'
import { useState, useEffect, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom'
import Pagination from './Pagination';
import StarIcon from '../image/icons/star.png'
import LocationIcon from '../image/icons/location.png'
import BookmarkIcon from '../image/icons/bookmark.png'

interface JobsListProps {
  setCurrentJob: React.Dispatch<React.SetStateAction<any>>;
}

const JobsList: React.FunctionComponent<JobsListProps> = ({setCurrentJob}) => {
  const [jobs, setJobs] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [jobsPerPage] = useState(10)

  const lastJobIndex = page * jobsPerPage
  const firstJibIndex = lastJobIndex - jobsPerPage
  const currentJobs = jobs.slice(firstJibIndex, lastJobIndex)

  const paginate: any = (pageNumber: number) => setPage(pageNumber)
  const nextPage = () => setPage(prev => prev + 1)
  const prevPage = () => setPage(prev => prev - 1)

  useEffect(() => {
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
    .then(response => response.json())
    .then((data) => {setJobs(data);});
  }, [])

  const openDetails = (e: MouseEvent<HTMLHeadingElement>) => {
    const jobId: string = e.currentTarget.id
    jobs.forEach(job => {
      if (job.id === jobId) {
        setCurrentJob(job)
      }
    })
  }

  return (
    <div className="jobs pt-8">
      {currentJobs.length !== 0 ? currentJobs.map((job, index) => {
        return (
          <div className='job_container m-auto mb-2 bg-white flex items-center px-4 py-6 justify-between rounded-lg' key={index} id={job.id}>
            <div className='description flex'>
              <div className='job__image'>
                <img src={job.pictures[1]} alt="Job image" style={{minWidth: '85px', height: '85px'}} className='rounded-full'/>
              </div>

              <div className='description__text flex flex-col justify-between'>
                <NavLink to='detailed'>
                  <h2 className='description__text__title cursor-pointer' id={job.id} onClick={openDetails}>{job.title}</h2>
                </NavLink>
                <p className='description__text__departament'>Departament name • {job.name}</p>
                <div className='description__text__address flex items-center'>
                  <span className='address_icon mr-2'><img src={LocationIcon} alt="Location Icon"/></span>
                  <p className='address'>{job.address}</p>
                </div>
              </div>
            </div>

            <div className='handler flex items-center gap-8'>
              <div className='rating flex'>
                <span className='start'><img src={StarIcon} alt="Rating Icon"/></span>
                <span className='start'><img src={StarIcon} alt="Rating Icon"/></span>
                <span className='start'><img src={StarIcon} alt="Rating Icon"/></span>
                <span className='start'><img src={StarIcon} alt="Rating Icon"/></span>
                <span className='start'><img src={StarIcon} alt="Rating Icon"/></span>
              </div>

              <div className='handler__panel flex flex-col justify-between'>
                <span className='favorite_btn flex justify-end'>
                  <img src={BookmarkIcon} alt="Bookmark Icon"/>
                </span>
                <p className='post_date'>Posted 2 days ago</p>
              </div>
            </div>
          </div>
        )
      }) : null}

      {jobs.length > jobsPerPage ? 
        <Pagination 
          jobsPerPage={jobsPerPage} 
          totalJobs={jobs.length} 
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        /> 
      : null}

    </div>
  )
}

export default JobsList;