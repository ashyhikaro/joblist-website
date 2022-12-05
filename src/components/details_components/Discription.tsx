interface Discription {
    discription: Array<string>,
}

const Discription: React.FunctionComponent<Discription> = ({discription}) => {
    let benefArr: Array<string> = []
    
    return (
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
    )
}

export default Discription;