interface JobHeader {
    title: string,
    salary: Array<any>,
}

const JobHeader: React.FunctionComponent<JobHeader> = ({title, salary}) => {
    return (
        <div className="job__information_header flex justify-between ">
            <h2 className='info_title text-[#3A4562]'>{title}</h2>
            <div className="salary">
                <p className="salary_value text-[#3A4562]">&#8364; {salary ? salary[0] + ' - ' + salary[1] : null}</p>
                <p className="salary_currency text-[#3A4562]">Brutto, per year</p>
            </div>
        </div>
    )
}

export default JobHeader;