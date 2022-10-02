import { useEffect, useState } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import florida_low_song from '../assets/flow-rida-low.mp3';
import {BsFillVolumeMuteFill} from 'react-icons/bs';
import {MdSkipNext, MdSkipPrevious} from 'react-icons/md';


const AudioPlayer = () => {
    const audioElement = new Audio(florida_low_song);

    const handlePlay = () => {
        audioElement.play()
    }

  return (
    <div className='flex justify-center items-center relative'>
       <MdSkipPrevious className='text-4xl text-blue-400' onClick={handlePlay} />
       <AiFillPlayCircle className='text-6xl text-blue-400' onClick={handlePlay} />
       <AiFillPauseCircle className='text-6xl text-blue-400' onClick={() => audioElement.pause()} />
       <MdSkipNext className='text-4xl text-blue-400' onClick={handlePlay} />
    </div>
  )
}

export default AudioPlayer