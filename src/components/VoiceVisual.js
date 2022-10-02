import { useState } from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import { AiOutlineStock} from 'react-icons/ai';
import florida_low_song from '../assets/flow-rida-low.mp3';
import {ImStatsBars} from 'react-icons/im';
import {TbAntennaBars5} from 'react-icons/tb';
import {GiRadialBalance} from 'react-icons/gi';
import {GrRadial} from 'react-icons/gr';

const VoiceVisual = () => {
    const [vis, setVis] = useState(SpectrumVisualizerTheme.radialSquaredBars)
  return (
    <>
    <div className='bg-red-200 flex justify-center h-64'>
        <SpectrumVisualizer
            audio={florida_low_song}
            theme={vis}
            colors={['#6F45FF', '#79F6FC']}
            iconsColor="#26a69a"
            backgroundColor="white"
            showMainActionIcon={false}
            showLoaderIcon
            highFrequency={20000}
    />
    </div>
    <div className='flex items-center justify-around mx-12 text-2xl'>
        <AiOutlineStock className='cursor-pointer hover:text-[#6F45FF] duration-500' onClick={() => setVis(SpectrumVisualizerTheme.line)} />
        <TbAntennaBars5 className='cursor-pointer hover:text-[#6F45FF] duration-500' onClick={() => setVis(SpectrumVisualizerTheme.roundBars)} />
        <ImStatsBars className='cursor-pointer hover:text-[#6F45FF] duration-500' onClick={() => setVis(SpectrumVisualizerTheme.squaredBars)} />
        <GiRadialBalance className='cursor-pointer hover:text-[#6F45FF] duration-500' onClick={() => setVis(SpectrumVisualizerTheme.radialSquaredBars)} />
        <GrRadial className='cursor-pointer hover:text-[#6F45FF] duration-500' onClick={() => setVis(SpectrumVisualizerTheme.radialLine)} />
    </div>
    </>
  )
}

export default VoiceVisual