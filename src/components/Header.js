import {BsChevronDown, BsThreeDots} from 'react-icons/bs';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-300">
        <BsChevronDown />
        <p>Now Playing</p>
        <BsThreeDots />
    </div>
  )
}

export default Header