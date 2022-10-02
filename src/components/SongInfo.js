import {useAtom} from 'jotai';
import { useEffect } from 'react';
import { currentSongAtom, songAtom, songIdAtom } from "../data/store"

const SongInfo = () => {
  const [currentSong, setCurrentSong] = useAtom(currentSongAtom);
  const [songs, setSongs] = useAtom(songAtom);
  const [songId, setSongId] = useAtom(songIdAtom);

  useEffect(() => {
    setCurrentSong(songs[songId])
  }, [songId])
  return (
    <div className="my-8">
        <h2 className="text-2xl text-indigo-400 text-center font-bold">{currentSong?.song_name}</h2>
        <p className="text-sm text-indigo-400 text-center">{currentSong?.artist}</p>
    </div>
  )
}

export default SongInfo