import { useState } from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import florida_low_song from '../assets/flow-rida-low.mp3';
import { MdOutlineShowChart} from 'react-icons/md';
import {ImStatsBars} from 'react-icons/im';
import {TbAntennaBars5} from 'react-icons/tb';
import { GiCircle} from 'react-icons/gi';
import {TbCircleDotted} from 'react-icons/tb';

const VoiceVisual = () => {
    const [vis, setVis] = useState(SpectrumVisualizerTheme.radialSquaredBars)
  return (
    <>
    <div className='bg-red-200 flex justify-center h-80'>
        <SpectrumVisualizer
            audio={florida_low_song}
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