import {BsChevronDown, BsThreeDots} from 'react-icons/bs';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <BsChevronDown  className='text-xl text-blue-400'/>
        <p className='text-xl text-blue-400'>Now Playing</p>
        <BsThreeDots className='text-xl text-blue-400'/>
    </div>
  )
}

export default Header