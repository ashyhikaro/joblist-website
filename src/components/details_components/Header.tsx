import ShareIcon from '../../image/icons/shareIcon.png'
import BookmarkIcon from '../../image/icons/bookmark.png'

const Header: React.FunctionComponent = () => {
    return (
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
    )
}

export default Header;