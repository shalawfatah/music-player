import { useState, useEffect } from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import { MdOutlineShowChart} from 'react-icons/md';
import {ImStatsBars} from 'react-icons/im';
import {TbAntennaBars5} from 'react-icons/tb';
import { GiCircle} from 'react-icons/gi';
import {TbCircleDotted} from 'react-icons/tb';
import { currentSongAtom, songAtom, songIdAtom } from '../data/store';
import {useAtom} from 'jotai';

const VoiceVisual = () => {
  const [songs, setSongs] = useAtom(songAtom);
  const [currentSong, setCurrentSong] = useAtom(currentSongAtom);
  const [songId, setSongId] = useAtom(songIdAtom);
  const [vis, setVis] = useState(SpectrumVisualizerTheme.radialSquaredBars);

  useEffect(() => {
    setCurrentSong(songs[songId])
  }, [songId])

  return (
    <>
    <div className='bg-red-200 flex justify-center h-80'>
        <SpectrumVisualizer
            audio={currentSong?.song_file}
            theme={vis}
            colors={['indigo', 'aqua']}
            backgroundColor="white"
            showMainActionIcon={false}
            showLoaderIcon
            highFrequency={8000}
    />
    </div>
    <div className='flex items-center justify-around mx-12 text-2xl'>
        <MdOutlineShowChart className='cursor-pointer text-indigo-400 hover:text-indigo-800 duration-500' onClick={() => setVis(SpectrumVisualizerTheme.line)} />
        <TbAntennaBars5 className='cursor-pointer text-indigo-400 hover:text-indigo-800 duration-500' onClick={() => setVis(SpectrumVisualizerTheme.roundBars)} />
        <ImStatsBars className='cursor-pointer text-indigo-400 hover:text-indigo-800 duration-500' onClick={() => setVis(SpectrumVisualizerTheme.squaredBars)} />
        <TbCircleDotted className='cursor-pointer text-indigo-400 hover:text-indigo-800 duration-500' onClick={() => setVis(SpectrumVisualizerTheme.radialSquaredBars)} />
        <GiCircle className='cursor-pointer text-indigo-400 hover:text-indigo-800 duration-500' onClick={() => setVis(SpectrumVisualizerTheme.radialLine)} />
    </div>
    </>
  )
}

export default VoiceVisual