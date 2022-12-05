import Map from '../../image/Map.png'
import LocationIcon from '../../image/icons/location.png'
import Circle from '../../image/circle.png'

interface InformationPanel {
    job: {
        name: string,
        address: string,
        phone: string,
        email: string,
    }
}

const InformationPanel: React.FunctionComponent<InformationPanel> = ({job}) => {
    return (
        <div className="info-panel">
            <h2 className='contacts_title text-[#3A4562] pb-2 border-b border-[#3A4562]/[.13]'>Contacts</h2>
            <div className="info_card bg-cover bg-no-repeat bg-top bg-[#2A3047] rounded-t-lg" >
                <h2 className="departament-name relative text-[#E7EAF0] pb-1">Departament name. {job.name}</h2>
                <div className="text-info flex gap-2 text-[#E8EBF3] relative -left-5"><img src={LocationIcon} alt="location icon" className='mt-1 w-[13px] h-[18px]'/><p>{job.address}</p></div>
                <p className="text-info relative text-[#E8EBF3]">{job.phone}</p>
                <p className="text-info relative text-[#E8EBF3]">{job.email}</p>
                <img src={Circle} alt="" className='circle'/>
            </div>
            <img src={Map} alt="Map" className='rounded-b-lg w-[100%] h-[auto]'/>
        </div>
    )
}

export default InformationPanel;