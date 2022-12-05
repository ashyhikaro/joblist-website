interface Additional {
    benefits: Array<string>,
}

const Additional: React.FunctionComponent<Additional> = ({benefits}) => {
    return (
        <div className="job__additional">
            <div className="head pb-2 border-b border-[#3A4562]/[.13]">
                <h2 className="head_title text-[#3A4562]">Additional info</h2>
            </div>

            <div className="employment__type mt-2 mb-6">
                <p className="employment__type_title text-[#3A4562] mb-2">Employment type</p>
                <div className="types__list flex gap-3">
                    {benefits.map((item: any, index: number) => {
                        return <div key={index} className="type text-[#55699E] w-[222px]">{item}</div>
                    })}
                </div>
            </div>

            <div className="employment__benefits">
                <p className="employment__benefit_title text-[#3A4562] mb-2">Benefits</p>
                <div className="employment__benefits flex gap-3">
                    {benefits.map((item: any, index: number) => {
                        return <div key={index} className="emp_benefit text-[#988B49] w-[222px] text-center">{item}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Additional;