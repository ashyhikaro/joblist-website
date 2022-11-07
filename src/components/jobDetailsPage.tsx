import '../styles/job-detailed.css'
import { useNavigate } from 'react-router-dom'
import ShareIcon from '../image/icons/shareIcon.png'
import BookmarkIcon from '../image/icons/bookmark.png'
import LocationIcon from '../image/icons/location.png'
import Map from '../image/Map.png'
import Circle from '../image/circle.png'
import { useState } from 'react'

interface JobDetailsPage {
    currentJob: {
        title?: string,
        salary?: string,
        description?: string,
        employment_type?: Array<string>,
        benefits?: Array<string>,
        pictures?: Array<string>,
        name?: string,
        address?: string,
        phone?: string,
        email?: string,
    };
}

const JobDetailsPage: React.FunctionComponent<JobDetailsPage> = ({currentJob}) => {
    const navigate = useNavigate()
    
    if(currentJob.title) {localStorage.setItem('job', JSON.stringify({...currentJob}))}
    const [job] = useState(currentJob.title ? currentJob : JSON.parse(localStorage.getItem('job') || '{}'))

    const discription = job.description?.split(' ')
    let benefArr: Array<string> = []

    const salary = job.salary?.split('-').map((item: any) => {
        let returnArr: Array<any> = []
        if (item.includes('k')) {
            let arr = item.split('k')
            arr[arr.length] = '000'
            returnArr.push(arr.join(' '))
        }
        return returnArr
    })

    return (
        <div className="job_details_page bg-white">
            <div className="page_container flex">

                <div className="main">
                    <header className='flex justify-between border-b border-[#3A4562]/[.13] '>
                        <h1 className='title text-[#3A4562]'>Job Details</h1>

                        <div className='header_handler flex items-center gap-8'>
                            <button className='flex gap-3 items-center'>
                                <img src={BookmarkIcon} alt="Save" />
                                <p className='btn_title text-[#3A4562]'>Save to my list</p>
                            </button>
                            <button className='flex gap-3 items-center'>
                                <img src={ShareIcon} alt="Share" />
                                <p className='btn_title text-[#3A4562]'>Share</p>
                            </button>
                        </div>
                        
                    </header>

                    <button className="apply__btn btn uppercase bg-[#384564;] text-white">Apply now</button>

                    <div className="job__information">
                        <div className="job__information_header flex justify-between ">
                            <h2 className='info_title text-[#3A4562]'>{job.title}</h2>
                            <div className="salary">
                                <p className="salary_value text-[#3A4562]">&#8364; {salary ? salary[0] + ' - ' + salary[1] : null}</p>
                                <p className="salary_currency text-[#3A4562]">Brutto, per year</p>
                            </div>
                        </div>

                        <p className="posted_date my-2">Posted 2 days ago</p>

                        <div className="job__information_discription">
                            <div className="discription_about text-[#3A4562]">{
                                discription?.map((item: any, index: number, arr: Array<any>) => {
                                    if(item === 'Responsopilities:\n') {
                                        return (
                                            <div key={index} className='mt-8 pb-2'>
                                                <p className='text-[#3A4562] discription_title'>{item}</p>
                                            </div>
                                        )
                                    } else {
                                        if (item === '\nCompensation') {
                                            return (
                                                <div key={index} className='mt-8'>
                                                    <p className='text-[#3A4562] discription_title pb-2'>{item + ' ' + arr[index+1] + ' ' + arr[index+2]}</p>
                                                    <p className="discription_about text-[#3A4562]">Our physicians enjoy a wide range of benefits, including:</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            if (item === '&' || item === 'Benefits:\n\t') {
                                                if (item === 'Benefits:\n\t') {
                                                    benefArr = discription.slice(index+4)
                                                    return (
                                                        <ul className='benefits_list mb-10'>
                                                            {
                                                                benefArr
                                                                .join(' ')
                                                                .split('. ')
                                                                .map((item, index) => <li className='benefit relative' key={index}><div></div>{item}</li>)
                                                            }
                                                        </ul>
                                                    )
                                                }
                                                return null
                                            } 
                                            else {
                                                if (benefArr.includes(item)) {
                                                    return null
                                                } else {
                                                    return item + ' '
                                                }
                                            }
                                            
                                        }
                                    }
                                })
                            }</div>
                        </div>
                    </div>

                    <div className='btn_container'>
                        <button className="apply__btn btn uppercase bg-[#384564;] text-white">Apply now</button>
                    </div>

                    <div className='wrap_container'>
                        <div className="job__additional">
                            <div className="head pb-2 border-b border-[#3A4562]/[.13]">
                                <h2 className="head_title text-[#3A4562]">Additional info</h2>
                            </div>

                            <div className="employment__type mt-2 mb-6">
                                <p className="employment__type_title text-[#3A4562] mb-2">Employment type</p>
                                <div className="types__list flex gap-3">
                                    {job.benefits?.map((item: any, index: number) => {
                                        return <div key={index} className="type text-[#55699E] w-[222px]">{item}</div>
                                    })}
                                </div>
                            </div>

                            <div className="employment__benefits">
                                <p className="employment__benefit_title text-[#3A4562] mb-2">Benefits</p>
                                <div className="employment__benefits flex gap-3">
                                    {job.benefits?.map((item: any, index: number) => {
                                        return <div key={index} className="emp_benefit text-[#988B49] w-[222px] text-center">{item}</div>
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="attached__images mt-20">
                            <div className="head pb-2 border-b border-[#3A4562]/[.13] mb-5">
                                <h2 className="head_title text-[#3A4562]">Attached images</h2>
                            </div>

                            <div className="images flex gap-4">
                                {
                                    job.pictures?.map((item: any, index: number) => {
                                        return <img key={index} src={item} className='object-cover w-[210px] h-[116px] bg-[#D8D8D8] rounded-lg' alt='' />
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="info-panel">
                    <h2 className='contacts_title text-[#3A4562] pb-2 border-b border-[#3A4562]/[.13]'>Contacts</h2>
                    <div className="info_card bg-cover bg-no-repeat bg-top bg-[#2A3047] rounded-t-lg" >
                        <h2 className="departament-name relative text-[#E7EAF0] pb-1">Departament name. {job.name}</h2>
                        <div className="text-info flex gap-2 text-[#E8EBF3] relative -left-5"><img src={LocationIcon} alt="location icon" className='mt-1 w-[13px] h-[18px]'/><p>{currentJob.address}</p></div>
                        <p className="text-info relative text-[#E8EBF3]">{job.phone}</p>
                        <p className="text-info relative text-[#E8EBF3]">{job.email}</p>
                        <img src={Circle} alt="" className='circle'/>
                    </div>
                    <img src={Map} alt="Map" className='rounded-b-lg w-[100%] h-[auto]'/>
                </div>
            </div>
            

            <button className="return_btn btn uppercase flex items-center rounded-lg bg-[#384564]/[.14] py-5 px-8"
                    onClick={() => {
                        navigate('/')
                    }}>
                <div className="arrow"></div> 
                <p>return to job board</p>
            </button>

        </div>
    )
}

export default JobDetailsPage;