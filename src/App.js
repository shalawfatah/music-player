import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import SongInfo from "./components/SongInfo";
import VoiceVisual from "./components/VoiceVisual";

function App() {
  return (
    <div className='w-96 mx-auto'>
      <Header />
      <VoiceVisual />
      <SongInfo />
      <AudioPlayer />
    </div>
  );
}

export default App;
