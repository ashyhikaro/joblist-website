import { useNavigate } from 'react-router-dom'

const ReturnButton: React.FunctionComponent = () => {
    const navigate = useNavigate()

    return (
        <button 
            className="return_btn btn uppercase flex items-center rounded-lg bg-[#384564]/[.14] py-5 px-8"
            onClick={() => {
            navigate('/')
        }}>
            <div className="arrow"></div> 
            <p>return to job board</p>
        </button>
    )
}

export default ReturnButton;