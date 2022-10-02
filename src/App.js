import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import SongInfo from "./components/SongInfo";
import VoiceVisual from "./components/VoiceVisual";
import {useAtom} from 'jotai';
import {currentSongAtom, songAtom, songIdAtom} from './data/store.js';
import { useEffect } from "react";
import {all_songs} from './data/songs.js';

function App() {
  
  const [songs, setSongs] = useAtom(songAtom);

  useEffect(() => {
    setSongs(all_songs);
  }, [])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className='w-84 shadow p-6 rounded-xl'>
      <Header />
      <VoiceVisual />
      <SongInfo />
      <AudioPlayer />
    </div>
    </div>
  );
}

export default App;
