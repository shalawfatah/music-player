import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import SongInfo from "./components/SongInfo";
import VoiceVisual from "./components/VoiceVisual";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className='w-96 shadow p-6 rounded-xl'>
      <Header />
      <VoiceVisual />
      <SongInfo />
      <AudioPlayer />
    </div>
    </div>
  );
}

export default App;
