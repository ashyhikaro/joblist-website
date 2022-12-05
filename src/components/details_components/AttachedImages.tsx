interface AttachedImages {
    pictures: Array<string>,
}

const AttachedImages: React.FunctionComponent<AttachedImages> = ({pictures}) => {
    return (
        <div className="attached__images mt-20">
            <div className="head pb-2 border-b border-[#3A4562]/[.13] mb-5">
                <h2 className="head_title text-[#3A4562]">Attached images</h2>
            </div>

            <div className="images flex gap-4">
                {
                    pictures.map((item: any, index: number) => {
                        return <img key={index} src={item} className='object-cover w-[210px] h-[116px] bg-[#D8D8D8] rounded-lg' alt='' />
                    })
                }
            </div>
        </div>
    )
}

export default AttachedImages;