import '../styles/job-detailed.css'
import { useState } from 'react'
import ReturnButton from './details_components/ReturnButton'
import InformationPanel from './details_components/InformationPanel'
import Additional from './details_components/Additional'
import AttachedImages from './details_components/AttachedImages'
import Discription from './details_components/Discription'
import JobHeader from './details_components/JobHeader'
import Header from './details_components/Header'


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

    if(currentJob.title) {localStorage.setItem('job', JSON.stringify({...currentJob}))}
    const [job] = useState(currentJob.title ? currentJob : JSON.parse(localStorage.getItem('job') || '{}'))

    const discription = job.description?.split(' ')

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
                    <Header />
                    
                    <button className="apply__btn btn uppercase bg-[#384564;] text-white">Apply now</button>

                    <div className="job__information">
                        <JobHeader title={job.title} salary={salary}/>
                        <p className="posted_date my-2">Posted 2 days ago</p>
                        <Discription discription={discription} />
                    </div>

                    <div className='btn_container'>
                        <button className="apply__btn btn uppercase bg-[#384564;] text-white">Apply now</button>
                    </div>

                    <div className='wrap_container'>
                        <Additional benefits={job.benefits}/>
                        <AttachedImages pictures={job.pictures} />
                    </div>
                </div>

                <InformationPanel job={job} />
            </div>

            <ReturnButton />
        </div>
    )
}

export default JobDetailsPage;