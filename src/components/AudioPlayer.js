import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import florida_low_song from '../assets/flow-rida-low.mp3';
import {BsFillVolumeMuteFill} from 'react-icons/bs';
import {MdSkipNext, MdSkipPrevious} from 'react-icons/md';
import { currentSongAtom, songAtom, songIdAtom } from '../data/store';
import {useAtom} from 'jotai';
import { useEffect, useState } from 'react';


const AudioPlayer = () => {
  const [currentSong, setCurrentSong] = useAtom(currentSongAtom);
  const [songId, setSongId] = useAtom(songIdAtom);
  const [songs, setSongs] = useAtom(songAtom);
  const [audioElement, setAudioElement] = useState(new Audio(currentSong?.song_file));
  //   console.log('songs ', songs)
    const handlePlay = () => {
        audioElement.play()
    }

  // Handle Previous
  const handlePrev = () => {
    if(songId > 0) {
      audioElement?.pause()
      setSongId(prev => prev - 1)
    }
  }
  const handleNext = () => {
    if(songId < 4) {
      audioElement?.pause()
      setSongId(prev => prev + 1)
    }
  }
    useEffect(() => {
      setCurrentSong(songs[songId])
      setAudioElement(new Audio(currentSong?.song_file))
    }, [songId])
  return (
    <div className='flex justify-center items-center relative'>
       <MdSkipPrevious className='text-4xl text-blue-400' onClick={handlePrev} />
       <MdSkipNext className='text-4xl text-blue-400' onClick={handleNext} />
    </div>
  )
}

export default AudioPlayer